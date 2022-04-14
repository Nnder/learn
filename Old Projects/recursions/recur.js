let fact = function factorial(n){
    if(n === 1){
        return 1
    } else {    
        return n * factorial(n-1)
    }
}



let matreshka = function qwe(n){
    if(n === 1){
        console.log(`last is ${n}`);
    } else{
            console.log(`top ${n}`);
            qwe(n-1);
            console.log(`last ${n}`);
    }

}

//matreshka(7);



let pow = function Pow(x,y){
    if(y === 0) return 1

    return x * Pow(x, y-1)
}

//console.log(pow(5,3));   



function fib(n){
    if(n<2){
        return n
    } else{
        return fib(n-1)+fib(n-2);
    }
};

//console.log(fib(20));



let countDown = (n) => {
    arrNum.push(n);
    return n>0 ? countDown(n-1) : arrNum.push(n)
}


//let arrNum = [];
//countDown(100);
//console.log(arrNum);


function sum(n){
    if(n === 1) {
        return 1
    } else {
        return n + sum(n-1)
    }

}

//console.log(sum(10000));

function secondSum(n){
    let result = 0
    for(let i = 0; i <= n; i++){
        result += i;
    }
    return result
}

console.log(secondSum(10));
