function sun(){
    let result = 0;
    let elements = Array.from(arguments);
    for (let i = elements.length - 1; i >= 0 ; i --){
        result += elements[i];
    }
    return result
}




function clean(elements) {
    return elements.filter((el) => !isNaN(Number(el)));
}

function verify(elements) {
    elements.forEach((el) => {if (isNaN(Number(el))) throw new Error("not a number")})
    return elements;
}

function sun1(){
    return verify(Array.from(arguments)).reduce((a,b) => Number(a) + Number(b), 0);
}

// spec
console.log(sun1());
console.log(sun1(1));
console.log(sun1(1,1));

// trash
console.log(sun1('1','1'));
console.log(sun1('as', '1'));
console.log(sun1([],{},'1',1));
console.log(sun1([1],{},'1',1));




