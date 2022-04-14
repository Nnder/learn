const animals = ['crab', 'dog', 'frog'];

function showArr(arr, elem) {
    let out = '';
    for (let i=0; i < arr.length; i++){
        if (arr[i] != undefined){
            out += `<div><img src="images\\${arr[i]}.png"><span>${i}</span></div>`;
        }
    }
    document.querySelector(elem).innerHTML = out;
    document.querySelector('.out-1-source-length').innerHTML = 'Длина массива ' + animals.length;
    document.querySelector('.out-1-source').innerHTML = 'const animal=[' + animals + ']';

}
showArr(animals, '.out-1-source-numbers');


function addToArray(){
    if (!Number.isInteger(+document.querySelector('.array-index').value)){
        alert('только целые числа');
        return false;
    }
    let index = +document.querySelector('.array-index').value;

    if (index > 50){
        alert('its so big')
        return false;
    }
    else if (index < 0){
        alert('Индекс должен быть больше нуля');
        return false;
    }
    animals[index] = document.querySelector('.array-element').value;
    console.log(animals);
    showArr(animals, '.out-1-source-numbers');
}

document.querySelector('.add-to-array').onclick = addToArray;
