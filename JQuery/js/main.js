// def try_change(smth):
//     smth = [1,2,3]

// data = [1,2]

// print(data, id(data))
// try_change(data)
// print(data, id(data))

// function hello(arr = []) {
//    arr.push('jack')
//    for (i of arr){
//       console.log(i);
//    }
// }

// hello()
// hello()
// hello()


class Man{
   constructor(age){
      this.age = age
   }
}

let alex = new Man(33)
let petr = alex

console.log(alex);
petr.age = 10;

console.log(alex);

// jquery();

$(document).ready(()=>{
   $('img[src^=img]:not([src*=4])').click(()=>{
      console.log('wwww')
   })


   // $('li:has(a)').click(()=>{
   //    console.log('wwww')
   // })

   $('li:contains(Контакты)').click(()=>{
      console.log('wwww')
   })


   $('p:first').click(()=>{
      console.log('ddd')
   })

   $('div:hidden').click(()=>{
      console.log('ddd')
   })

   $('div').click(()=>{
      console.log('ddd')
   })


}) 

$(()=>{
   // let tagP = $('.mainText p')
   
   // console.log(tagP.text('qwerty'));
   // console.log(tagP.html(`<p>qwerty</p>`));

   // tagP.hide(200, (e)=>{
   //    console.log('www')
   // }).delay(2000).show(200);

   // let img = $('.icons > div')
   // img.hide(1000).show(1000);

   
   let f = (selector, w, h)=>{
      selector.width(w).height(h)
   }

   //f($('.icons > div'), 10, 20)

   // let tagP = $('.mainText').html('<a href="google.com">Gooooooooogle</a>')

   // tagP.fadeOut(1000).fadeIn(1000).fadeTo(1000, 0.5, function(){console.log(123)})
   // tagP.slideUp(2000).slideDown(2000, ()=> console.log('dddd'));

   // let img = $('.logo > img')
   // console.log(img.attr('src'))
   // img.attr('src', 'img/icon1.png')
   // img.removeAttr('src');

   // attr с обьектом

   // let rec = $('.recive')
   // rec.addClass('addClass').removeClass('recive')

   let q = $('nav menu li a')
   console.log(q.css({'color': 'black', 'font-size': 50}))
   console.log(q.animate({'font-size': 20}, 5000, ()=>{}))

   let next = $('.mainText').after('<p>123123121321232123213123dddd<p>')
   next.before('<p>123123121321232123213123dddd<p>')
   next.prepend('<p>123123121321232123213123dddd<p>')
   next.append('<p>123123121321232123213123dddd<p>')

   $('.icons img').each(function(a,b,c){
      console.log($(this));
   })


   console.log($('div').length)

   // let clone = $('.mainText').clone();
   // $('body').append(clone);

   let clone = $('.mainText').remove();
   $('body').append(clone);

   $('img[alt], a')

   $('.logo').mouseover(()=> alert('mouse'))
   $('.logo').mouseout(()=> alert('mouse'))
   // $('').submit()
   // $('').focus()
   // $('').blur()
   // $('').change()
   // $('').reset()

   // $('').keydown();
   // $('').keypress()
   // $('').keyup()

   // $('').load()
   // $('').resize()
   // $('').scroll()


   $(function(){
      $('.arrowDown').click(function(){
         let clone = $(this).clone();
         $(this).after(clone);
      })

      $('.recive > p').hover(function(){
         $(this).css({
            'color': 'green',
            'font-size': '25',
         })

      }, function(){
         $(this).css({
            'color': 'red',
            'font-size': '35',
         })

      })

      $('.mainText').click(function(e){
         console.log(e.screenY);
         e.preventDefault();
      })
   })

   $(function(){


      $(':checked').fadeOut(1000);

      $(':submit').click(function(e){
         e.preventDefault
         console.log($('textarea').val())
      })

      $('.form1').submit(function(e){
         if(false){
            e.preventDefault();
         }

      })

      $('.text1').focus(function(){
         $(this).css({
            'background': 'grey',
         })
      })

      $('.text1').blur(function(){
         $(this).css({
            'background': 'green',
         })
      })

      $('.text1').change(function(e){
         console.log(e);
      })

      $('.text1').attr('disabled', 'disabled')

   })


   $(window).scroll(function(){
      console.log($(this).height())
   })

   $(window).resize(function(){
      console.log($(this).height())
   })

   $('h2').toggleClass('smth');
   $('h2').hover(function(){
      $(this).empty();
   })

   $('h2').wrap('<div class="hellllll">stss</div>');
   $('h2').unwrap();


   console.log($('h2').parent())
   console.log($('h2').closest())
})


// $(function(){
//    $(':submit').click(function(e) {
//       $('.text2').attr('disabled','disabled');
//       e.preventDefault();
//    });
//    $(':reset').click(function(e) {
//       $('.text2').removeAttr('disabled');
//       e.preventDefault();
//    });
// });