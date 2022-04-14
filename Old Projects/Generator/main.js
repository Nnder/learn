// function* str(){
//     yield 'H';
//     yield 'E';
//     yield 'L';
//     yield 'L';
//     yield 'O';
//     return 'OK'
// }
//
// let q = str();
//
// console.log(q.next());
// console.log(q.next());
// console.log(q.next());
// console.log(q.next());
// console.log(q.next());
// console.log(q.next());
//
//
// function* numberGen(n=10){
//     for (let i = 0; i< n; i++){
//         yield i
//     }
// }
//
// let number = numberGen();
// console.log(number.next())
// console.log(number.next())
// console.log(number.next())
// console.log(number.next())
// console.log(number.next())
// console.log(number.next())
// console.log(number.next())
// console.log(number.next())
// console.log(number.next())
// console.log(number.next())
// console.log(number.next())
// console.log(number.next())






// let iterator = {
//     [Symbol.iterator](n= 10){
//         let i = 0;
//         return {
//             next(){
//                 if (i < n){
//                     return {
//                         value: ++i,
//                         done: false,
//                     }
//                 } else {
//                     return {
//                         value: undefined,
//                         done: true,
//                     }
//                 }
//             }
//         }
//     }
// }


// function* iter(n=10){
//     for (let i = 0; i<n;i++){
//         yield i
//     }
// }
//
// for (let k of iter()){
//     console.log(k);
// }


// let range = {
//     from: 1,
//     to: 5,
//
//     *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
//         for(let value = this.from; value <= this.to; value++) {
//             yield value;
//         }
//     }
// };
//
// alert( [...range] ); // 1,2,3,4,5







// function* gen() {
//     // Передаём вопрос во внешний код и ожидаем ответа
//     let result = yield "2 + 2 = ?"; // (*)
//     let result2 = yield "2 + 2 = ?"; // (*)
//
//     alert(result);
//     alert(result2);
// }
//
// let generator = gen();
//
// let question = generator.next().value; // <-- yield возвращает значение
// console.log(question)
//
// generator.next(4); // --> передаём результат в генератор
// generator.next(5); // --> передаём результат в генератор
// generator.next(5); // --> передаём результат в генератор
//



function* gen() {
    let ask1 = yield "2 + 2 = ?";



    //alert(ask1); // 4

    let ask2 = yield "3 * 3 = ?"

    //alert(ask2); // 9
}

let generator = gen();

// alert( generator.next().value ); // "2 + 2 = ?"
//
// alert( generator.next(4).value ); // "3 * 3 = ?"
//
// alert( generator.next(9).done ); // true

for (let i of generator){
    console.log(i);
}

console.log([...gen()]);





function* gen() {
    try {
        let result = yield "2 + 2 = ?"; // (1)s

        alert("Выполнение программы не дойдёт до этой строки, потому что выше возникнет исключение");
    } catch(e) {
        alert(e); // покажет ошибку
    }
}



let generator = gen();

let question = generator.next().value;

generator.throw(new Error("Ответ не найден в моей базе данных")); // (2)











