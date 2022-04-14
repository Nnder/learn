// $(function(){
//     $('body').append($('<p id="qq">smth<p>'));
// })

// let buffer = new ArrayBuffer(16); // создаётся буфер длиной 16 байт

// let view = new Uint32Array(buffer); // интерпретируем содержимое как последовательность 32-битных целых чисел без знака

// alert(Uint32Array.BYTES_PER_ELEMENT); // 4 байта на каждое целое число
// alert(view.length); // 4, именно столько чисел сейчас хранится в буфере
// alert(view.byteLength); // 16, размер содержимого в байтах

// // давайте запишем какое-нибудь значение
// view[0] = 123456;

// // теперь пройдёмся по всем значениям
// for(let num of view) {
//   alert(num); // 123456, потом 0, 0, 0 (всего 4 значения)
// }

// // new TypedArray(buffer, [byteOffset], [length]);
// // new TypedArray(object);
// // new TypedArray(typedArray);
// // new TypedArray(length);
// // new TypedArray();


$(function(){
  let blob = new Blob(["Hello, world!"], {type: 'text/plain'});
  let url = URL.createObjectURL(blob);
  $('#link').attr('href', url)

    
  })


   // URL.revokeObjectURL($('#link').attr('href'));

