let myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.color;
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.color);


myCar["year"] = 1969;
console.log(myCar["model"]);
myCar["do you like?"] = "i hate car";
console.log(myCar["do you like?"]);

function showProps(obj, objName){
    let result = "";
    for (let i in obj){
        if (obj.hasOwnProperty(i)){
            result += objName + '.' + i + ' = ' + obj[i] + "\n";
        }
    }
    return result;
}

console.log(showProps(myCar, "myCar"));

// myCar.make = Ford
// myCar.model = Mustang
// myCar.year = 1969
// myCar.do you like? = i hate car

let myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

let mycar = new Car("Chevy", "Malibu", 1993);
let anothercar = new Car("Mazda", "Miata", 1990);
console.log(mycar.model);
mycar.color = "black";
console.log(mycar.color);





let Animal = {
    type: "Invertebrates",
    displayType: function () {
        console.log(this.type);
    }
}

let animal1 = Object.create(Animal);
animal1.displayType();

let fish = Object.create(Animal);
fish.type = "Fishes";
fish.placeholder = "Water";
fish.displayType();





let alpha = {
    1:"z",
    2:"y",
    3:"x",
    4:"w"
};
console.log(alpha[2]);



let dishes = {
    plates: 8,
    cups: 10,
    forks: 28,
    bowls: 13
};
delete dishes.cups;
console.log(dishes);



console.log(dishes.hasOwnProperty('plates'));
console.log(dishes.hasOwnProperty('cups'));



let ourStorage = {
    "desk": {
        "drawer": "stapler"
    },
    "cabinet": {
        "top drawer": {
            "folder1": "a file",
            "folder2": "secrets"
        },
        "bottom drawer": "soda"
    }
};

console.log(ourStorage["cabinet"]["top drawer"]["folder2"]);
console.log(ourStorage["desk"]["drawer"]);
ourStorage["cabinet"]["top drawer"]["folder2"] = "cake recipe";
console.log(ourStorage["cabinet"]["top drawer"]["folder2"]);



console.log(Object.keys(ourStorage));
console.log(Object.keys(ourStorage.cabinet));

console.log(ourStorage["desk"]["drawer"].repeat(10).toUpperCase());
