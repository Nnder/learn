let promise = function(func){
    let status = 'Pending';

    let resolve = function(e){
        status = 'Resolve'
        return e
    }

    let reject = function(e){
        status = 'Reject'
        return e
    }


    func(resolve, reject)
}

let q = promise()


