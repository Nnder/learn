const width = 5;
const heigth = 10;

function calcArea(width, heigth){
    return width * heigth
}

calcArea(width, heigth);

class Rectangle {
    private _width;
    private _height;

    constructor(w,h) {
        this._width = w;
        this._height = h;
    }

    public get width(){
        return this._width
    }

    public set width(value){
        if(value <= 0){
            this._width = 1;
        } else {
            this._width = value
        }
    }

    calcArea() {
        return this._width * this._height
    }

    calcPerimetr(){
        return (this._width+this._height) * 2
    }
}

const rect = new Rectangle(5,10);
rect.calcArea();
rect.width


class User {
    private _username;
    private _passwd;
    private _id;

    constructor(username,passwd) {
        this._username = username;
        this._passwd = passwd;
        this._id = Math.random();
    }

    public get username() {
        return this._username
    } 

    public get passwd() {
        return this._passwd
    } 

    public get id() {
        return this._id
    } 

    public set username(name) {
        this._username = name;
    } 

    public set passwd(value) {
        this._passwd = value;
    } 

}

const user = new User('QWERTY', '1234567');



class Database {
    private _url;
    private _port;
    private _username;
    private _passwd;
    private _tables;

    constructor(url, port, username, passwd){
        this._url = url;
        this._port = port;
        this._username = username;
        this._passwd = passwd;
        this._tables = []
    }


    get url() {
        return this._url
    }

    get port() {
        return this._port
    }

    get username() {
        return this._username
    }

    get passwd() {
        return this._passwd
    }

    get tables() {
        return this._tables
    }

    public createNewTable(table) {
        this._tables.push(table);
    }
}


const db = new Database(1,2,3,4);
db.createNewTable(123)
db.tables



class Person {
    private _firstName;
    private _lastName;
    private _age;

    constructor(firstName, lastName, age) {
        this._age = age;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public greeting(){
        console.log(`Привет я человек ${this._firstName}`);
    }

    public get fullName(){
        return `имя ${this._firstName} фамилия ${this._lastName}`;
    }

    get firstName(){
        return this._firstName
    }

    set firstName(name){
        this._firstName = name
    }

    get lastName(){
        return this._lastName
    }

    set lastName(name){
        this._lastName = name
    }

    get age(){
        return this._age
    }

    set age(age){
        if(age < 0){
            this._age = 0;
        } else {
            this._age = age
        }
    }
}

class Employee extends Person {

    private inn;
    private number;
    private snils;

    constructor(firstName, lastName, age, inn, number, snils) {
        super(firstName,lastName,age);
        this.inn = inn;
        this.number = number;
        this.snils = snils;
    }

    public greeting(){
        console.log(`Привет я работник ${this.firstName}`);
    }
}


class Developer extends Employee {
    private level;

    constructor(firstName, lastName, age, inn, number, snils, level) {
        super(firstName,lastName,age,inn,number,snils);
        this.level = level
    }

    public greeting(){
        console.log(`Привет я программист ${this.firstName}`);
    }
}

const person1 = new Person('name', 'lastname', '30');
const Employee1 = new Employee('name', 'lastname', '30', 23123, 4412424214, 521555);
const programmer = new Developer('name', 'lastname', '30', 23123, 4412424214, 521555, 'Junior');


const PersonList: Person[] = [person1, Employee1, programmer];

function massGreeting(persons: Person[]){
    for(let i = 0; i< persons.length; i++){
        const person = persons[i];
        person.greeting();
    } 
}

massGreeting(PersonList)
