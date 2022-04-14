$(function(){
    function cssShadow({
        font_size,
        offset_x,
        offset_y,
        blur,
        opacity,
        color,
        rgb
    }){
        let cssStyles = offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + rgb;
        $('h1').css('text-shadow', cssStyles);
        $('#resultHex').val('background-color: ' +color+ ';\nopacity: ' +opacity+ ';\nfont-size: ' +font_size+'px;');
        $('#resultRGB').val('text-shadow: ' +offset_x+'px ' +offset_y+'px '+blur+'px '+rgb + ';\nfont-size: ' +font_size+'px;');
    }

    cssShadow({
        font_size: 40,
        offset_x: 4,
        offset_y: -1,
        blur: 0,
        opacity: 1,
        color: '#ff0000',
        rgb: 'rgba(255,0,0)',
    })

    $(document).on('input change', 'input', function(){
        let font_size = $('#font-size').val();
        let offset_x = $('#offset_x').val();
        let offset_y = $('#offset_y').val();
        let blur = $('#blur').val();
        let opacity = $('#opacity').val();
        let color = $('input[type="color"]').val()+'';


        let red16 = color[1]+''+color[2];
        let green16 = color[3]+''+color[4];
        let blue16 = color[5]+''+color[6];
        let red10 = parseInt(red16,16)
        let green10 = parseInt(green16,16)
        let blue10 = parseInt(blue16,16)


        let rgb = 'rgba('+red10+', '+green10+', '+blue10+', ' +opacity+')';

        $('h1').css('fontSize', font_size+'px');
        cssShadow({
            font_size: font_size,
            offset_x: offset_x,
            offset_y: offset_y,
            blur: blur,
            opacity: opacity,
            color: color,
            rgb: rgb,
        })
    })

})