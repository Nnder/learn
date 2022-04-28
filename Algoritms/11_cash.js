// function cacheFunc(fn){
//     const cache = new Map();
//     return function (arg){
//         console.log(cache);
//         if(cache.has(arg)){
//             return cache.get(arg);
//         }
//         let result = fn(arg)
//         cache.set(arg ,result);
//         console.log(cache);
//         return result
//     }
// }

function cache(fn){
    const cache = {}
    return function (n){
        if(cache[n]){
            console.log('cache')
            return cache[n]
        }

        let result = fn(n);
        cache[n] = result;
        return result
    }
}


function factorial(n){
    let result = 1;
    while(n!=1){
        result *= n
        n-=1
    }
    return result
}


let example = cache(factorial);

console.log(example(10))
console.log(example(12))
console.log(example(12))