function FirstLesson(){
     setInterval(function (){
         window.alert();
     },4000)

    let name = 'alice'; // переменная
    const a = 10; // переменная read-only
    console.log(a)
}





function secondLesson(){
    ;(function (){

    }())

    "use strict";

}


function thirdLesson(){
    //sorax; // индентификаторы
    //123123; // числовые литералы

    console.log(2e1); // числовой научный тип где е это степень числа 2 * 10
    console.log(0o777); // 8 ричная система
    console.log(0xff24f); // 16 ричная система

    let a = 5;
    console.log(`bss ${a}`)
    // строки char в js нет "

    let b = Symbol("id");
    console.log(b);


    let z = 10;
    while (a !== z){
        ++a;
        console.log(a);
    }
}

function fourthLesson(){



    let obj = {name: "qq"},
        arrayQ = [1,2,3],
        regexp = /w+/g,
        func = function (){};
    console.log(typeof obj);
    console.log(typeof arrayQ);
    console.log(typeof regexp);
    console.log(typeof func);
    let a,b,c,d;
    a = b = c = d = 5;

    console.log(null * 4);

    let sym1 = Symbol('foo');
    let sym2 = Symbol('foo');
    console.log(sym1 === sym2);
    console.log(sym1);
    console.log(String(sym1) === String(sym2));
    console.log(String(sym1));


    let myCar = new Object();
    console.log(myCar);
    myCar.make = "Ford";
    console.log(myCar);

    let bb = "023";
    bb = Number(bb);
    console.log(bb);
    bb = String(bb);
    console.log(bb);
    bb = Boolean(bb);
    console.log(bb);



     let age = prompt("age?", 18);
     console.log(age);

     let req = confirm("are u ok?");
     console.log(req);



}


function fourthLessonPartTwo(){
    //console.log(window);

    console.log(2 << 8);
    console.log(345);
    console.log(.85);


    // конструктор Number

    let a = new Number(12.866);
    console.log(typeof  a);
    // плавающая точка
    console.log(a.toFixed(2));

    console.log(2 .toFixed(2));

    // округление
    console.log(a.toPrecision(3));


    console.log(a.toExponential(4));





    let qw = true, qe = null, qr = undefined;

    console.log(-qw);
    console.log(-qe);
    console.log(-qr);


    let xz = 1;
    console.log( !xz );

    console.log(+qw);
    console.log(+qe);
    console.log(+qr);

    let strq = 0;
    console.log(+!+strq);
    console.log(!strq);







}

function five(){
    // таблица умножения
    for (let i = 0; i <= 10; ++i){
        var g = 10;
        for (let j = 0; j <= 10; ++j){
            console.log(`${i} * ${j} = ${i * j}`);
        }
        console.log('======================================');
    }
}


function six() {
    console.log('S\'o\'');
    console.log('hello world'.length);
    console.log('qwerty'.substring(2));
    console.log('qwerty'.slice(-6));



    console.log('qwerty hy'.replace('qwerty', 'hyerty'));

    console.log('qwerty qwerty qwerty qwerty qwerty'.split(' '));
    console.log('qwerty'[0]);



    let a = 26;
    let b;
    let result = a > 5 ? b = 10 : b = 0;

    let age = 12 > 18 ? true : console.log('yo');


    console.log(age);
    console.log(result);
    //return age;

    let qq = 4;

    if ( qq >= 2 && qq <= 7) console.log('qq [2-7]');


}


function sixSecond(){
    let i = 1;
    switch (i){
        case 1:
            i++;
            break;
        case 2: i++;
        case 3: i++;
        case 4: i++;
        case 5: i++;
        case 6: i++;
        default: i--;
    }
    console.log(i);

}

function sixTherd(){
    let tagId = document.getElementById('test');
    console.log(tagId.classList, tagId.className, tagId.id);



    console.log(qq);
    console.log(qq());
    function qq(){
        console.log('its work');
        return 5;

    }
}


function seven(){
     console.log(false && false);
     console.log(true || true);

     let a = 0, isTrue = false;
     isTrue && (a = 5);
     console.log(a) // false == 0 // true == 5
     console.log(null || "qwe" && true || NaN);



    console.log(addSquare(2,2));

     function addSquare(a, b){
         function square(x){
             return x * x;
         }
         return square(a) + square(b);
     }
     console.log(addSquare(2,2));
     console.log(addSquare(5,5));
     console.log(addSquare(10, 20));

     function os(){
         let s = 0, i = 1;
         while (i <= 1000 && s < 5){
             s += 1/i;
             i++;
             console.log(s);
         }
     }


     function osTwo(){
         let s = 0, i = 1;
         while (( s += i++) <= 100){
             console.log(s);
         }
     }


     // y = f(x) = kx+b
     function osThree(){
        let f, k = 0.5, b = 2;
        let x = 0
        for (; x<=1; x+= 0.1){
            f = k*x+b;
            console.log(f);
        }
     }


     function osFour() {
         const PSW = "passwd";
         let psw = null;
         do {
             psw = prompt("enter passwd", "");
         }
         while (psw != PSW);
         console.log("ok");
     }

     function osFive(){
         for (let i = 0; i<= 10; i++){
             if (i === 5) break;
              for (let j = 0; j<= 10; j++){
                console.log(i + " " + j);
             }
         }
     }


     function osSix(){
         firstFor: for (let i = 0; i<= 10; i++){
             for (let j = 0; j<= 10; j++){
                 if (i === 5) continue firstFor;
                 console.log(i + " " + j);
             }
         }
     }

     function osSeven(){
         for (let j = 0; j<= 10; j++){
             if (j === 5) continue;
             console.log(" " + j);
         }
     }


}




function sevenSecond(){

    const hello = 'Hello world';
    console.log(hello.length);
    console.log(hello[10]);

}


function eight(){
    let obj = {}
    let a = [1,2,3,4];

    function greet(name) {
        return "hello" + name;
    }


    console.log();
    console.log(a[4]);

    console.log(greet("qq"));
    console.log(greet());






    showPrimes(10);

    let acs = [1,2,3,4,5,6];
    console.log(acs.join(' - '));

    let prim = '1512514124H124124i12412410014124';
    let primC = prim.replace(/[0-9]/, '')
    let primb = prim.replace(/[0-9]/g, '') // g - global
    console.log(primC);
    console.log(primb);


}

function nine(){
    function agreeCookies(question, yes, no){
        if (confirm(question)) yes();
        else no();
    }

    function agreeYes(){
        console.log('accept');
    }

    function agreeNo(){
        console.log('decline');
    }

    //agreeCookies('Cookie?', agreeYes, agreeNo);

    let afd = null;
    let b = true;
    if (b) {
        afd = function () {
            console.log('true');
        };
    }
    else {
        afd = function () {
            console.log('false');
        };
    }

    //afd();

    let afd2 = (b) ?
        function () {console.log('true');} : function () {console.log('false');};

    //afd2();

    let a = 12;
    console.log(Number.isNaN('qwe'));
    console.log(Number.isNaN(12 * 'q'));
    console.log(Number.isNaN(12));
}


function ten(){
    console.log(null === null);
    console.log(null == null);
    console.log(null === undefined);
    console.log(null == undefined);
    console.log(1 + null);

    setTimeout( n => {
        let a = [];
        let b = a;
        a.push(123);
        b.push(456);
        console.log(a)
        console.log(b)


        let z = {};
        let x = z;

        x.Tag = "hi";
        console.log(z);
        console.log(x);
    }, 1000);

    let asddd = (15,20); // выведет 20
    console.log(asddd);
    console.log((asddd, 'its fucking works')); // выведет its f works
    let qweasd = 10;
    console.log((asddd, qweasd)); // выведет 10

    let day;
    let date = new Date().getDay();

    switch (date) {
        case 0:
            day = "sunday";
            break;
        case 1:
            day = "monday";
            break;
        case 2:
            day = "tuesday";
            break;
        case 3:
            day = "wednesday";
            break;
        case 4:
            day = "thursday";
            break;
        case 5:
            day = "friday";
            break;
        case 6:
            day = "saturday";
    }
    console.log(day);


    let teams = [['qwe', 1], ['rty',0]];

    console.log(teams[0][1]);


    teams[0].forEach(function (element) {
       console.log(element);
    });



    let numbersDate = [1,2,3,4,5,6,7,8];

    numbersDate.forEach(function (element) {
        let lastNum = element;
        if (numbersDate.length !== 0){
            let sum = lastNum + element;
            console.log(sum);
        }
    });


}


function eleven(){
    let a = ['a', 'b', 'c'];
    let b = [1,2,6,5,3,4,6,7];

    console.log(a.push('d'));
    console.log(a);
    console.log(a.pop());
    console.log(a);
    console.log(a.join('?'));
    console.log(a);
    console.log(a.reverse());
    console.log(a);
    console.log(a.shift());
    console.log(a);
    console.log(a.unshift('p '));
    console.log(a);
    console.log(a.push('i'));
    console.log(a.push('f'));
    console.log(a.push('g'));
    console.log(a.sort());
    console.log(b);
    console.log(b.sort());
    console.log(b);
    console.log(b.splice(2,2,'start'));
    console.log(b);

    let original = [true, true, undefined, false, null];

    let copy1 = original.slice(0);
    console.log(copy1);

    let copy2 = [...original];
    console.log(copy2);


    // return array with no changes

    let deepArray = [["qwerty"]];
    let copyArray = deepArray.slice(0);

    //copyArray[0].push(' is great');
    //console.log(deepArray, copyArray);

    //

     let deepCopy = JSON.parse(JSON.stringify(deepArray));
     deepCopy[0].push(' is great');
     console.log(deepArray, deepCopy);


     let books = {
         author: 'anton',
         price: 0,
         nPages: 0,
         'num pages': 0
     };

     books.str = 'string';
    console.log(books);

    delete books.str;
    console.log(books);

    // have it in object?
    console.log('str' in books);
    console.log('price' in books);

    let keyName = 'num pages';
    console.log(books[keyName]);
    delete books['num pages'];


    let newCar = createCar('mark','black');
    function createCar(model, color){
        return {
            //model: model,
            //color: color
            //   if name of key equals name of data, then can make this
            model,
            color
        }
    }

    console.log(newCar.model);

    let phoneCode = {
        7: 'Russia',
        1: 'Usa' 
    }
    for (let code in phoneCode){
        console.log(code);
    }


    function onBC(eventObj){
        let clickedEl = eventObj.currentTarget;
        let operation = clickedEl.innerHTML;
        mkOperation(operation);
    }

    function mkOperation(operation){
        if (operation === '+'){
            console.log(1 + 1);
        }

    }

    let buttonPlus = document.getElementById('buttonPlus');

    buttonPlus.addEventListener('click', onBC);


}




function twelve(){
    let car2 = {
        name: 'mazda',
        speed: 0,
        engine: {
            v: 1.6,
            nameEngine: 'qq'
        }
    }

    //console.log(car2.engine.nameEngine);

    const arr = [];
    arr.push('qwe','qwerty');
    console.log(arr.pop());
    console.log(arr.push('asd'));
    console.log(arr.shift());
    console.log(arr.unshift('ad','dd','dsa'));
    console.log(arr);

    let a = arr.length;
    let b = [];
    for (let i = 0; i < a; i++){

        b.unshift(arr.shift());
        console.log(b); 
    }
    console.log(arr);

    console.log(b);
    b.splice(2,2,'hello');
    console.log(b);


    const num = [2,4,6,8];
    console.log(num.map(n => n.toString() ));
    console.log(num.map(Number));
    console.log(num);

    const sum = num.reduce((acc,n) => acc + n, 2);
    console.log(sum);

    const arrss = [2,3,4,5,6,7,8,9];
    let resultts = [];

    resultts.push(arrss.reduce((acc, n) => acc ** n ,2));
    console.log(resultts);
    console.log(arrss);


    resultts = [];
    resultts.push(arrss.reduce((acc, n, index, array) => acc + index ,0));
    console.log(resultts);
    console.log(arrss);

    resultts.push(arrss.reduce((acc, n) => acc )); // 2
    resulttts.push(arrss.reduce((acc, n) => n )); // 3

    console.log(resultts);
    console.log(arrss);

    const arrObj = [ {x:1},{x:2},{x:3}];
    console.log(arrObj.reduce((acc , n ) => acc + n.x ,10));

    let flattened = [[0, 1], [2, 3], [4, 5]];
    console.log(flattened);
    console.log(flattened.reduce((a, b) => a.concat(b)));



    // friends - список из объектов(друзей)
// где поле "books" - список любимых книг друга
    let friends = [
        { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
        { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
        { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
    ]

// allbooks - список, который будет содержать все книги друзей +
// дополнительный список указанный в initialValue
    let allbooks = friends.reduce((prev, curr) => [...prev, ...curr.books], ["Alphabet"]);

    console.log(allbooks);

// allbooks = ["Alphabet", "Bible", "Harry Potter", "War and peace",
// "Romeo and Juliet", "The Lord of the Rings", "The Shining"]

}


function thirteen(){
    for (let i = 10; i>0; i--){
        console.log(i);
    }

    for ( let i = 10; i--; ){
        console.log(i);
    }

    let i = 10;
    while (i < 20){
        console.log(i++);
    }

    while (i--){
        console.log(i);
    }


    let j = 0;
    do console.log(j++); while (j > 10);

}


function fourteen(){
    let car = {
        model: 'toyota',
        color: 'black',
        go: function (driver){
            console.log('move' + driver);
        },
        fly(pilot) {
            console.log('fly' + pilot);
        },
        getModer(){
            return this.model;
        }
    };

    car.fly('andrei');

    car.go('fedor');
    car.stop = function (){
        console.log('stop');
    }

    car.stop();


    let car1 = {model: 'toyota',};
    let car2 = {model: 'mazda',};

    car1.getModel = getModel;
    car2.getModel = getModel;

    console.log('return model ' + car1.getModel());
    console.log('return model ' + car2.getModel);

    function getModel(){
        return this.model;
    }

    // error

    //let get = getModel;
    //console.log(get);

    // exec error but this = undefined
    // we take not all coda, just a part of code
    // method getModel his don't know about model

}

function fiveteen(){
    let book = {
        name: 'qw',
        page: 112,
        price: 100,
    }

    let copyBook = {};

    for (let key in book){
        copyBook[key] = book[key];
    }

    console.log(copyBook);


    function DeepClone(dest, obj){
        for (let key in obj){
            if ((typeof obj[key]) === 'object'){
                dest[key] = DeepClone({}, obj[key]);
            }
            else {
                dest[key] = obj[key];
            }
        }
        return dest;
    }

    function Car(title, price, author){
        this.title = title;w
        this.price = price;
        this.author = author;
    }

    let car = new Car('f','u',10);
    console.log(car);

    let car2 = new function (){
        this.model = 'reno';
        this.go = function (){
            console.log("car move");
        }
    }
}

agawgawgawgwa = 10;


function sixTeen(){
    let q = {
        qwerty: "1",
    };
    function Dog(){
        this.name = 'gg';
    }
    new Dog();
}


function sevenTeen(){
let arr = 100000000000;
console.log(arr);
arr.length = 100;
console.log(arr);



let newArr = [123,2,3,4,5,6];
let old = [];

for (let i of newArr){
    old.push(i);
}
old.push(123);
console.log(old);
console.log(newArr);


let matrix = [
   [1,2,3],
   [4,5,6],
   [7,8,9]
];



for (let row of matrix){
    let cols = "";
    for (let val of row){
        cols += val + " ";
    }
    console.log(cols);
}

console.log(matrix.shift());
matrix.unshift(123);
console.log(matrix);

let qqq = "Qwerty";
qqq[2] = 'q';
console.log(qqq);
}


function eightTeen(a){
    a = {name: 123, iq: 100};
    //let b = [...new Set(a)];
    let z = new WeakMap();
    z.set({name: 123, iq: 100}, "obj")
    //let c = [...new WeakMap(a)];
    return z



}


function nineTeen(){
    let a = [1,2,3,4,5,6,7];
    return a.find((n,index,arr) => {
        if (n === 2){
            return true
        }
    });

}
console.log(nineTeen());



function hoisting(){
    qwe();

    function qwe(){
        console.log(i);
        let i = 10;
    }
}






function polifill(){
    // Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.21
// Ссылка (en): http://es5.github.io/#x15.4.4.21
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.21
    if (!Array.prototype.reduce) {
        Array.prototype.reduce = function(callback/*, initialValue*/) {
            'use strict';
            if (this == null) {
                throw new TypeError('Array.prototype.reduce called on null or undefined');
            }
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }
            var t = Object(this), len = t.length >>> 0, k = 0, value;
            if (arguments.length >= 2) {
                value = arguments[1];
            } else {
                while (k < len && ! (k in t)) {
                    k++;
                }
                if (k >= len) {
                    throw new TypeError('Reduce of empty array with no initial value');
                }
                value = t[k++];
            }
            for (; k < len; k++) {
                if (k in t) {
                    value = callback(value, t[k], k, t);
                }
            }
            return value;
        };
    }
}







function testDelete(){
    let obj = {
        ps1: 42,
        ps2: 'heeeee',
        ps3: function (){
            return 42 * 2;
        }
    };

    console.log(obj.ps1, obj.ps2, obj.ps3);

    delete obj.ps3;

    console.log(obj.ps1, obj.ps2, obj.ps3);

    for (let p in obj){
        console.log(p);
    }
}










function jB(){
    const jamesBond = {
        firstName: "Daniel",
        lastName: "Craig",
        getFullName: function (){
            return `${this.firstName} ${this.lastName}`;
        }
    }
    console.log(jamesBond.getFullName());






    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

    }

    Person.prototype.getFullName = function (){
        return `${this.firstName} ${this.lastName}`;
    }

    const jb2 = new Person("Daniel", "Craig");
    console.log(jb2.getFullName());


    class Sum {
        constructor(a, b) {
            this.a = a;
            this.b = b;
        }

        getSum = function (){
            return this.a + this.b;
        }
    }

    //Sum.prototype.getSum() = function () { return this.a + this.b};



    const sum2 = new Sum(2,2);
    console.log(sum2.getSum());
}





function dop(){




    function testingDelete(axs){
        delete axs;
        console.log(axs);
    }
    testingDelete(5);






    function showPrimes(n){
        for (let i = 2; i < n; i++){
            if (!isPrime(i)) continue;
            console.log(i);
        }
    }

    function isPrime(n){
        for (let i = 2; i < n; i++){
            if ( n % i === 0) return false;
        }
        return true;
    }



    let a = 10
    let two = () => a;
    console.log(two());


    const z = n => (n >= 0 ? n : 0);
    console.log(z(-5));
    console.log(z(5));
    console.log(z(0));

    const w = s => ({'temp' : s});
    console.log(w(5))
    let count = 0;



    const increment = () => {
        count++;
        console.log(count);
    }

    const timeFunction = () => {
        setTimeout(increment, 1000)
    }

    document.querySelector('button').addEventListener('click', timeFunction);


    const zsh = [1,2,3];
    let b = zsh.map( item => item * 3 );

    console.log(b);

    let qq = b => ( b >= 0 ? b : 0 );


    console.log(qq(5));
    const ssa = [2,5,6];
    console.log(ssa.map(item => ({'num' : item})));











    const readJson = file => {
        file.forEach(item => {
            console.log(item.qq);
        })
    }

    const clickHandle = () => {
        fetch('file.json')
            .then( res => res.json())
            .then( readJson )
    }

    document.querySelector('button').addEventListener('click', clickHandle);
}




function duplicate(){
    function duplicateFirst(){
        let num;
        let arr = [1,2,3,4,5,1,2,3,5,6,7,8];

        let a1 = new Set(arr);
        console.log(arr);
        console.log(a1);
    }


    function duplicateSecond(){
        let arr = [1,2,3,4,5,1,2,3,5,6,7,8];
        let a1 = [...new Set(arr)];
        console.log(a1);
    }

    function duplicateThird(){
        let arr = [1,2,3,4,5,1,2,3,5,6,7,8];
        let a1 = Array.from(new Set(arr));
        console.log(a1);
    }

    function duplicateFourth(){
        let arr = [1,2,3,4,5,1,2,3,5,6,7,8];
        let a1 = arr.filter( (item, index) => {
            return arr.indexOf(item) === index;
        })

        let a2 = arr.filter( (item, index) => {
            return arr.indexOf(item) !== index;
        })
        console.log(a1);
        console.log(a2);
    }

    function duplicateFive(){
        let arr = [1,2,3,4,5,1,2,3,5,6,7,8];
        let a1 = arr.reduce((result, item) => {
            return result.includes(item) ? result : [...result, item];
        }, []);

        console.log(a1);
    }

    function dopolnenie(){
        let a1 = [1,2,4,4,4,2,6,7].filter((item, i, arr) => arr.filter(_item => _item === item).length === 1);
        console.log(a1);
    }


}










function qwe(){
    let result = arguments;
    let q;
    for (let i = 0; i < arguments.length; i++){
        console.log(i);
        q = Number(result[i]) + Number(result[++i]);
    }

    return q;
}

//console.log(qwe(12,35,3));

function tabq(){
    let table = document.getElementById("forecast-table");
    let cells = table.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'td');
    console.log(cells);
}







