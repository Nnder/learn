// for await of

const emulate = (id,ms)=> new Promise(resolve => {
    setTimeout(()=> resolve(id) ,ms)
})

const promises = [
    emulate(1,250),emulate(2,500),emulate(3,1500)
]

async function old (){
    for (const promise of await Promise.all(promises)){
        console.log('old', promise);
    }
}
 
//old()


async function modern(){
    for await (const promise of promises){
        console.log('Modern', promise);
    }
}

//modern();



// Object

const person = {
    name: 'Max',
    age: 25
}

function obj(){

    console.log(Object.getOwnPropertyDescriptors(person));

    console.log(Object.entries(person))

    console.log(Object.fromEntries(Object.entries(person)))

    console.log(Object.entries(['M','A','X']));

    console.log(Object.fromEntries(Object.entries(['M','A','X'])))

    for( const [name, item] of Object.entries(person)){
        console.log(item)
    }

    console.log(Object.values(person));
    console.log(Object.keys(person));

}

//obj();


// Strings

function str(){
    const start = '       hello Youtube'
    const end = 'This is new JavaScrift features            '
    
    console.log(start + end);

    console.log(start.trimStart() + end.trimEnd());
    console.log((start + end).trim());


    console.log('vk'.padStart(6));
    console.log('vk'.padStart(6,'www.'));
    console.log('vk'.padStart(16,'www.'));

    console.log('vk'.padEnd(6,'.com'));

    //=====================================

    function tag(strings, name, age){
        const [s1,s2,s3] = strings;
        console.log(name, age);
        const ageStr = age > 42 ? 'Старшим' : 'Младшим'
        return `${s1}${name}${s2}${ageStr}${s3}`;
    }

    const output = tag`человек по имени ${person.name} является ${person.age} в семье`;

    console.log(output);

}

//str();


// Arrays

function arr(){

    const nested = ['a','b',['c','d'],['e', ['f','g']]]

    console.log(nested.flat());
    console.log(nested.flat(2));

    const techs = ['react redusx' , 'angular', 'vue', 'deno and node'];

    console.log(techs.map(tech => tech.split(' ')).flat());

    console.log(techs.flatMap(tech => tech.split(' ')));

}

//arr();


// Class

class Person{

    static type = 'HUMAN';

    static #private_type = 'HUMAN';

    name = 'unknown name';
    #year = 2000;

    constructor(name){
        this.name = name;
    }

    get age(){
        return new Date().getFullYear() - this.#year;
    }

    set age(n){
        this.#year = new Date().getFullYear() - n;
    }

    static printArea(){
        return Person.#private_type
    }

}

function classs(){
    const person_one = new Person('max');

    console.log(person_one)

    console.log(Person.type);

    console.log(person_one.type)
}

//classs();


//BIGINT

function bigInt(){
    console.log(Number.MAX_SAFE_INTEGER);

    console.log(typeof 10);
    console.log(typeof 10n);

    //console.log(10n - 4);

    console.log(parseInt(10n) - 4);
    console.log(typeof +`${10n}`);
    console.log(BigInt(4));

    console.log(5n / 2n);
    //console.log(5.42n);


}

//bigInt();



//Promise allsettled

function allsettled(){
    
    const p1 = Promise.resolve(1);
    const p2 = Promise.reject('my');
    const p3 = Promise.resolve(3);

    // ;(async ()=> {
    //     const result = await Promise.all([p1,p2,p3]).catch(e => console.log(e));
    //     console.log(result);
    // })()


    ;(async ()=> {
        const result = await Promise.allSettled([p1,p2,p3]);
        console.log(result);
    })()


}

//allsettled()


console.log(globalThis);


// NULLABLE operator ??

function nullable(){
    const v = {
        undefined: undefined,
        null: null,
        false: false,
        zero: 0,
        empty: ''
    }


    console.log(v.undefined || 'default undefined')
    console.log(v.undefined ?? 'default undefined')

    console.log(v.null || 'default null')
    console.log(v.null ?? 'default null')

    // другие

    console.log(v.false || 'default false')
    console.log(v.false ?? 'default false')

    console.log(v.zero || 'default 0')
    console.log(v.zero ?? 'default 0')

    console.log(v.empty || 'default empty')
    console.log(v.empty ?? 'default empty')
}

//nullable();


//OPTIONAL operator ?.


function optional(){
    const v = {
        bank: {
            name: 'My bank',
            amount: {
                value: 1000,
                currency: 'rub'
            }
        }
    }

    const v2 = {
        
    }

    console.log(v?.bank?.amount?.value);
    console.log(v2?.bank?.amount?.value);


    console.log(document.querySelector('h1')?.textContent)
    console.log(document.querySelector('h2')?.textContent)

}

//optional();


// Strings


function st(){
    const stri = "Javascript is the best langage in the world. Javascript";

    str2 = stri.replace('Javascript', 1);
    str3 = stri.replaceAll('Javascript', 1);

    console.log(str2)
    console.log(str3)


}

//st();


// Promises

function promis2(){

    function createPromise(value,delay,check){
        return new Promise((resolve,reject) => {
            if(check){
                reject("Error")
            }
            setTimeout(()=>{
                resolve(value)
            }, delay)
        } , reject => {
            
        })
    }

    const p1 = createPromise(1,250);
    const p2 = createPromise(2,700);
    const p3 = createPromise(3,100, true);

    async function start(){
        const res = await Promise.any([p1,p2,p3]);
        return res
    }

    console.log(start());

}

//promis2()

function privatMethonds(){ 
    class Private {
        #birthYear = 1993
        get #age(){
            return this.#getYear() - this.#birthYear
        }

        set #age(n){
            this.birthYear = this.#getYear() - n
        }

        dateOfBirth(){
            return this.#age
        }

        #getYear(){
            return new Date().getFullYear();
        }



    }

    let men = new Private();
    console.log(men.age)
    console.log(men.birthYear)
    console.log(men.dateOfBirth())
}
//privatMethonds();

function logicalAssigment(){

    let a = 1
    let b = 42

    // if (a) {
    //     a = b
    // }


    //a && (a = b) 42
    //a || (a = b) 1
    //a ?? (a = b) 1

    //a &&= b 42
    //a ||= b 1
    //a ??= b 1

}

//logicalAssigment();


function numbersSecond(){
    const num1 = 1_000_000
    console.log(num1)

    const num2 = 10 ** 9

    console.log(num1 === num2)

}

//numbersSecond()


function weakRef(){
    function func(){
        const user = new WeakRef({
            name: 'vladilen'
        })

        console.log(user.deref().name)
    }

    const registry = new FinalizationRegistry((value)=>{
        console.log('Clearing garbage', value)
    })

    async function start(){

        // await new Promise((resolve =>{
        //     setTimeout(()=>{
        //         resolve(func())
        //     },300)
        // }))

        // await new Promise((resolve =>{
        //     setTimeout(()=>{
        //         resolve(func())
        //     },00)
        // }))



        const ref = new WeakRef({a:42})
        const mini = {a:42}
        registry.register(ref,'MyWeakRef')
        registry.register(mini,'My Object')

    }

    start();



    // example

    const listenersRegistry = new FinalizationRegistry((target, wrapper, type)=>{
        target.removeEventListener(type, wrapper);
    })

    function addWeakListener(target, type, listener){
        const wr = new WeakRef(listener)
        const wrapper = event => wr.deref()?.(event)
        listenersRegistry.register(listener, {target, wrapper, type})
        target.addEventListener(type, wrapper)
    }

    addWeakListener(document, 'click', event=>{
        console.log(event)
    })

    

}

//weakRef();

function repeatOperators(){

    function requestSales(){
        return {
            sales: {
                big: {value: 20, description: '1 hour'},
                other: { value: 10, description: 'sale forewer'}
            }
        }
    }

    let response = requestSales();
    let code = 'big';
    let sale = response.sales?.[code]?.value ?? 0;

    console.log(sale)

    // &&=
    // ||=
    // ??=

    let x = 1;
    let y = 2;

    x && (x = y)
    x || (x = y)
    x ?? (x = y)

    x &&= y
    x ||= y
    x ??= y
}

//repeatOperators();


// вызов функций при помощи `dd`

function testOne(dd){
    return dd
}

// console.log(testOne`1`)
// console.log(testOne(1))


function es2022(){
    // инициализация полей класса
    class Post{
        title;
        content;
        shares = 0;
        #password = 10;

        get #passwordd(){
            return this.#password
        }

        #clear(){
            console.log('dd');
        }

        // эргономичные проверки приватных полей

        static hasPrivate(obj, s){
            console.log(this.#password)
        }

        static hasClear(obj, s){
            return this.s in obj
        }
    }

    class User{
        name;
        #password;
        get #userPassword(){
            return this.#password
        }
        #clear(){
            this.name = null;
            this.#password = null;
        }

        static hasPassword(obj,property){
            return obj.hasOwnProperty(property)
        }

        has(obj,property){
            return this.hasOwnProperty(property)
        }
    }

    // const user_1 = new User()
    // console.log(User.hasPassword(user_1,'#password'))
    // console.log(user_1.has(user_1,'name'))

    class Test{
        static #createTask(){
            return 1
        }
        returnTask(){
            return this.#createTask()
        }

        hello = 10;
        something(){
            return 10
        }
        #password
    }

     let q = new Test()
    // //console.log(q.returnTask())
    // //console.log(Test.returnTask)
    // console.log(q.hasOwnProperty('something'))

    if(Object.prototype.hasOwnProperty.call(q, 'someProp')){
        //something
    }

    // console.log(Object.hasOwn(q, 'hello'))
    // console.log(Object.hasOwn(q, '#password'))

    // статические блоки

    class NewUser{
        static roles;
        name;
        #password;
    }

    try{
        //NewUser.roles = getRolesFromDb();
    } catch{
        //NewUser.roles = getRolesFromBackup();
    }

    // Awesome

    class WowUser{
        static roles;
        name;
        #password;
        static {
            try{
                //NewUser.roles = getRolesFromDb();
                console.log('qq')
            } catch{
                //NewUser.roles = getRolesFromBackup();
            }
        }

        static { 
            console.log('qq')
        }
        
    }


    // Await вверхнего уровня

    // let data = await forAwait()

    // async function forAwait(){
    //     return await fetch('https://learn.javascript.ru/fetch')
    // }

    // новый флаг у регуляолк /d

    // новый метод массивов at == [] но не нежно писать length-1 можно написать просто -1 и тд

    let arr = [1,2,3];
    console.log(arr.at(-1))

}

//es2022(); 



// someNew

function lastThings(){

    // import media обьект который указывает методанные js модуля

    console.log()
}

lastThings();