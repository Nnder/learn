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
        if(this.#state !== STATE.PENDING) return
        this.#value = value
        this.#state = STATE.FULFIELLD
        this.#runCallbacks()
    }

    #onFail(value){
        if(this.#state !== STATE.PENDING) return
        this.#value = value
        this.#state = STATE.REJECTED
        this.#runCallbacks()
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
        this.then(undefined,cb);
    }

    finally(cb){

    }
}

