const STATE = {
    FULFIELLD: 'fulfielled',
    REJECTED: 'rejected',
    PENDING: 'pending',
}

class MyPromise {
    #thenCbs = [];
    #catchCbs = [];
    #state = STATE.PENDING;
    #value;
    #onSuccessBinded = this.#onSuccess.bind(this);
    #onFailBinded = this.#onFail.bind(this);

    constructor(cb){
        try{
            cb(this.#onSuccessBinded, this.#onFailBinded)
        }
        catch(e) {
            this.onFail(e);
        }
        
    }

    #runCallbacks(){
        if(this.#state === STATE.FULFIELLD){
            this.#thenCbs.forEach(cb =>{
                cb(this.#value)
            })

            this.#thenCbs = []
        }

        if(this.#state === STATE.REJECTED){
            this.#catchCbs.forEach(cb =>{
                cb(this.#value)
            })

            this.#catchCbs = []
        }
    }

    #onSuccess(value){
        queueMicrotask(()=>{
            if(this.#state !== STATE.PENDING) return

            if(value instanceof MyPromise){
                value.then(this.#onSuccessBinded, this.#onFailBinded)
                return 
            }
    
            this.#value = value
            this.#state = STATE.FULFIELLD
            this.#runCallbacks()
        })
    }

    #onFail(value){
        queueMicrotask(()=>{
            if(this.#state !== STATE.PENDING) return

            if(value instanceof MyPromise){
                value.then(this.#onSuccessBinded, this.#onFailBinded)
                return 
            }

            if(this.#catchCbs.length === 0){
                throw new UncaughtPromiseError(value)
            }
    
            this.#value = value
            this.#state = STATE.REJECTED
            this.#runCallbacks()
        })
    }

    then(thencb,catchcb){
        return new MyPromise((resolve, reject)=>{
            this.#thenCbs.push(result=>{
                if(thencb == null){
                    resolve(result)
                    return
                }

                try {
                    resolve(thencb(result))
                }catch (e){
                    reject(e)
                }
            });

            this.#catchCbs.push(result=>{
                if(catchcb == null){
                    reject(result)
                    return
                }

                try {
                    resolve(catchcb(result))
                }catch (e){
                    reject(e)
                }
            });
            
            this.#runCallbacks();

        })
    }

    catch(cb){
        return this.then(undefined,cb);
    }

    finally(cb){
        return this.then(result=> {
            cb()
            return result
        }, result=> {
            cb()
            throw result
        });
    }

    static resolve(value){
        return new MyPromise((resolve)=> resolve(value))
    }

    static reject(value){
        return new MyPromise((resolve,reject)=> reject(value))
    }
}

class UncaughtPromiseError extends Error{
    constructor(error){
        super(error)

        this.stack = `(in promise) ${error.stack}`
    }
}