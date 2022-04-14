let strq = "methods for strings";
let str = "qwerty as u can see i can write something";
console.log(str.slice(-1));
console.log(str.substring(0,10));
console.log(str.substr(4,6));


for (let i = 0; i<str.length; ++i){
    let num = str.slice(0,i);
    console.log(num);
}

document.writeln("qq");

let reverse = function (s){
    return s.split("").reverse().join("");
};
console.log(reverse("saratip satra"))

// выбирает 1 букву
console.log(str.charAt(1));
// выбранной буквы получаем 2 код
console.log(str.charCodeAt(1));
// добавить букву или массив к строке
console.log(str.concat("g"));
// проверяет заканчиваеться ли текст на нужное слово или букву
let strqs = "qwerty as u can sEee i can write something";
console.log(strqs.endsWith("g"));
// переводит из Char в понятные человеку буквы и цифры
console.log(String.fromCharCode(114));
// есть ли указанный обьект
console.log(strqs.includes("me"));
// гоорить с какого по счету знаку начинаеться указанные данные ищет только 1 раз
console.log(strqs.indexOf("ty"));
// тоже самое только ищет с конца ищет только 1 раз
console.log(strqs.lastIndexOf("we"));
// выдает массив всех указанных обьектов array
console.log(strqs.match(/can/g));
// повторяет несколько раз
console.log(strqs.repeat(4));
// ищет и заменяет на выбранное
console.log(strqs.replace(/can/g, "CAN"));
//     узнать как еще можно указывать данные на примере этого     /can/g

// ищет какая длина у указанного обьекта в массиве
console.log(strqs.search("can"));
// добавляет в массив при определенных данных
console.log(strqs.split(" "));
// проверяет с чего начинаеться массив
console.log(strqs.startsWith("qw"));
// мальнькие буквы
console.log(strqs.toLowerCase());
// большие буквы
console.log(strqs.toUpperCase());
// убирает пустое пространство из обьекта
let qqq = "      qq             ";
console.log(qqq.trim());




