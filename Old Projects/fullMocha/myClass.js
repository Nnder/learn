class MyClass{
    constructor() {
        console.log('initialization');
    }
    add (arg1, arg2){
        let result;
        result = arg1 + arg2;
        return result;
    }

    callAnotherFn(arg1, arg2){
        let result = this.add(arg1,arg2);
        return result;
    }

    callTheCallback (callback){
        callback();
    }
}

module.exports = MyClass;