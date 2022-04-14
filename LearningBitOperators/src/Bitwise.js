export default class Bitwise {
    constructor(range, firstValue = 0, secondValue = 0){
        this.range = range;
        this.firstValue = firstValue;
        this.secondValue = secondValue;
    }

    bitwiseOperators =  {
        0:"~",
        1:"&",
        2:"|",
        3:"^",
        4:"<<",
        5:">>",
        6:">>>",
        length: 7,
    }

    generateValue(){
        this.firstValue = Math.round(Math.random()*this.range);
        this.secondValue = Math.round(Math.random()*this.range);
        return this.getValue();
    }

    getValue(){
        return {
            1:this.firstValue,
            2:this.secondValue,
        }
    }

    generateResult(operator){
        switch(operator){
            case "~": return ~this.firstValue
            case "&": return this.firstValue & this.secondValue;
            case "|": return this.firstValue | this.secondValue;
            case "^": return this.firstValue ^ this.secondValue;
            case "<<": return this.firstValue << this.secondValue;
            case ">>": return this.firstValue >> this.secondValue;
            case ">>>": return this.firstValue >>> this.secondValue;
        }
    }

    generateRandomOperator(){
        this.generateValue();
        return this.generateOperator(Math.floor(Math.random()*(this.bitwiseOperators.length-1)));
    }

    generateOperator(value){
        return {
            operator: this.bitwiseOperators[value],
            operation: this.bitwiseOperators[value] !== "~" ? `${this.firstValue} ${this.bitwiseOperators[value]} ${this.secondValue}` : 
                                                                `${this.bitwiseOperators[value]} ${this.firstValue} `,
            result: this.generateResult(this.bitwiseOperators[value]),
        }
    }
}