$(function(){
    $('.button').click(function(){
        $('.gallery').slideToggle(500);
        if($(this).text() == '-'){
            $(this).text('+');
        } else {
            $(this).text('-');
        }
        
    })



    $('.small a').click(function(e){
        if($('.big > img').attr('src') !== $(this).attr('href')){
            $('.big > img').hide().attr('src',$(this).attr('href')).fadeIn(1000)
        }

        $(this).first().fadeTo(500,0.6).css({
            'border': '1px dotted red',
        })
        e.preventDefault();
    })
})