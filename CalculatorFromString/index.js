function calculation(str){

    if(str.match(/[(|)|*|/]/i)){

        
        let new_arr = str.match(/[(|)|*|/]/g);

        if(str.match( /\(/g )){




            let match = str.match(/[(|)|*|/]/g);
            console.log(match);

            let obj = {
                priority: {
                    position: '2-25',
                    string: "212412+2142+421412",
                }
            };


            for(let i = 0; i < match.length; i++){
                if(match[i]){
                    
                }

            }



            
        }

        


    }

    let operands = str.match(/\d+/ig);
    let operators = str.match(/\D+/ig);



    let arr = [];

    for (let index = 0; index < operands.length; index++){
        arr.push(operands[index]);
        arr.push(operators[index]);
    }

    arr.pop();
    console.log(arr);

    let a = arr[0];

    for(let i = 0; i < arr.length; i++){
        switch(arr[i+1]){
            case "*":
                a = +a * +arr[i+2];
                break; 
            case "+":
                a = +a + +arr[i+2];
                break;
            case "-":
                a = +a - +arr[i+2];
                break; 
            case "/":
                a = +a / +arr[i+2];
                break; 
        }
    }

    return a
}

console.log(calculation("1+2+3/4+(4+5)"));


function priority(){

}

function validation(){

}