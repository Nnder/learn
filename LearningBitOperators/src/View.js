export default class View {
    constructor(position, object){
        this.position = position;
        this.bitwise = object.generateRandomOperator();
        this.obj = object;
    }

    clear() {
        this.position.innerHTML = "";
    }

    render() {
        this.position.innerHTML = `<div id="form"><div>${this.bitwise.operation}</div><input id="test_value"><input value="send" type="button" id="send"></div>`;
        this.position.querySelector('#send').addEventListener('click', (e)=>{
            this.checkValue(this.bitwise.result);
            this.generate();
        });
    }

    checkValue(value){
        if(this.position.querySelector("#test_value").value == value){
            alert(`${value} is equal to ${this.bitwise.result}`);
        } else {
            alert(`${value} is not equal to ${this.bitwise.result}`);
        }
        this.bitwise = this.obj.generateRandomOperator()
    }

    generate(){
        this.clear();
        this.render();
        
    }
}