function fibonaci(n){
    return n*n
}

function caching(){
    let cache = {};

    return function (n){
        if (typeof cache[n] === 'undefined'){
            cache[n] = fibonaci(n);
            console.log('qqqqds');
        }
        return cache[n];
    }
}


let q = caching();

console.log(q);

console.log(q(2));
console.log(q(2));
console.log(q(2));
console.log(q(3));
console.log(q(3));


let test = function (a,b,c){
    return test.length;
}
console.log(test(1,2,3));

let qds = new Function();
qds.length = 5;

console.log(qds.length);
