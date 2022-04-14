const delay = ms => {
    return new Promise(r=> setTimeout(()=>r(), ms))
}

// delay(2000).then(()=>{
//     console.log('123');
// })

const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodoes(){
//     return delay(2000)
//     .then(()=>fetch(url))
//     .then(response=>response.json())
// }

// fetchTodoes().then((data)=>console.log(data))


async function fetchAsyncTodoes(){
    await delay(2000);
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
}

//fetchAsyncTodoes();

function Animal(options){
    this.name = options.name
    this.color = options.color

    this.sayName = function(){
        console.log(this.name)
    }
}

Animal.prototype.voice = function(){
    console.log(this.color);
}

// let dog = new Animal({name: 'rex', color: '#fff'});

// console.log(dog.voice())


const Cat = function(options){
    Animal.apply(this,arguments)
    this.hasTail = options.hasTail
}

Cat.prototype = Object.create(Animal.prototype)
Cat.prototype.constructor = Cat

Cat.prototype.tail = function(){
    console.log(this.hasTail)
    console.log(this.name)
}
const cat = new Cat({name:'Murzik', color:'#000', hasTail:true})
cat.voice()

class Animal2{
    constructor(options){
        this.name = options.name
        this.color = options.color
    }

    voice(){
        console.log(this.name)
    }
}

let dog2 = new Animal2({name:'dog2', color:'white'});
console.log(dog2);

class Cat2 extends Animal2{
    constructor(options){
        super(options)
    }
}

const cat2 = new Cat2({name:'cat#2', color:'white'})

cat2.voice();

Object.prototype.print = function(){
    console.dir(this);
}

cat.print()


Array.prototype.myMap = function(cb){
    let arr = [];
    for(i in this){
        arr.push(cb(i))
    }
    return arr
}

async function q(arr){
    for await(const n of arr){
        console.log(n);
    }
}

q([1,2,3,4,524124])