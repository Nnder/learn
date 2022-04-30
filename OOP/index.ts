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


