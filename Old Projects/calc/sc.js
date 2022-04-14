function out(num){
    document.getElementById('out').innerHTML = document.getElementById('out').innerHTML + num;
}

function clearCalc(){
    document.getElementById('out').innerHTML = '';
}

function equalCalc(){
    let num = document.getElementById('out').innerHTML;
    if (num){
        document.getElementById('out').innerHTML = eval(num);
    }
}

function back(){
    let num = document.getElementById('out').innerHTML;
    document.getElementById('out').innerHTML = num.substring(0, num.length-1);

}


function plus(){
    let num1, num2, result;
 
    num1 = document.getElementById('num1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('num2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById('out').innerHTML = result;
}

document.getElementById('')


// округение числа + убирание из него букв + образует обьект в число
// parseInt();

// let num = 5;
// выбор обьектов с помощью имя
// document.form.q.value = document.form.q.value + num;

// удаление последнего обьекта
// num = "qq";
// console.log(num.substring(0, num.length-1));

// конкотенация




