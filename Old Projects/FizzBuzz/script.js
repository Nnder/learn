function easy_lvl(){
    for (let i = 0; i < 100; i++){ // цикл
        if (i % 3 === 0 && i % 5 === 0){ // ветвление
            console.log('FizzBuzz');
        } else if (i % 3 === 0){ // последовательность операций
            console.log('Fizz');
        } else if (i % 5 === 0){
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

function isFizz(n){
    if (n % 3 === 0 ){
        return true;
    }
    return false;
}

function isBuzz(n){
    if (n % 5 === 0){
        return true;
    }
    return false;
}

function isFizzBuzz(n){
    if (n % 3 === 0 && n % 5 === 0){
        return true;
    }
    return false;
}

function level_two(){
    for (let i = 1; i < 100; i++){
        switch (true){
            case isFizzBuzz(i):
                console.log('FizzBuzz');
                break;
            case isBuzz(i):
                console.log('Buzz');
                break;
            case isFizz(i):
                console.log('Fizz');
                break;
            default:
                console.log(i);
        }
    }
}



function omf_lvl(){
    const gen = (n, w) => (num) => num % n === 0 ? w : '';

    const fizz = gen(3, 'Fizz');
    const buzz = gen(5, 'Buzz');

    [...Array(99).keys()].map( i => i+1).forEach(i => console.log(fizz(i)+buzz(i) || i));
}


const MAX_NUM = 100;

class Tag {
    constructor(_value) {
        this.value = _value;
    }
}

class Printer {
    constructor(_context) {
        this.context = _context;
    }

    print() {
        console.log(this.context.value);
    }
}

class DivCondition {
    constructor(_divider) {
        this.divider = _divider;
    }

    isTruthy(num) {
        return num % this.divider === 0;
    }
}


class AndStrategy {
    constructor(_conditionsOrStrategies) {
        this.conditions = _conditionsOrStrategies;
    }

    isTruthy(num) {
        for (let i in this.conditions){
            if (!this.conditions[i].isTruthy(num)) {
                return false;
            }
        }
        return true;
    }
}


class TagNumRule {
    constructor(_tag, _strategy) {
        this.strategy = _strategy;
        this.tag = _tag;
    }
    isSuccess(num) {
        return this.strategy.isTruthy(num);
    }
}


class TagNumRulesCollection {
    constructor(_tags) {
        this.tags = _tags;
    }
    find(num, defaultValue) {
        for (let i in this.tags) {
            if (this.tags[i].isSuccess(num)) {
                 return this.tags[i].tag;
            }
        }
        return defaultValue;
    }
}


const numTags = new TagNumRulesCollection([
    new TagNumRule(new Tag('FizzBuzz'), new AndStrategy([new DivCondition(3), new DivCondition(5)])),
    new TagNumRule(new Tag('Fizz'), new AndStrategy([new DivCondition(3)])),
    new TagNumRule(new Tag('Buzz'), new AndStrategy([new DivCondition(5)]))
]);

for (let i = 1; i < MAX_NUM; i++){
    new Printer(numTags.find(i, new Tag(i))).print();
}


