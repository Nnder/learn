(() => {
    const cnv = document.querySelector('canvas');
    const ctx = cnv.getContext('2d');
    
    function init()
    {
        cnv.width = innerWidth;
        cnv.height = innerHeight;
    }
    init();

    // при изменении размеров страницы он подстраиваеться
    window.addEventListener('resize', init);

    const numberOfRings = 3;

    // так как если увеличивать значение колец то они будут рисоваться с одинаковым радиусом и будут сливаться
    // дабы этого не происходило добавим параметры увеличивающие радиус каждого нового кольца
    // создадим переменную radius в функцие updateRings
    const ringRadiusOffset = 7;

    // эта переменная использовалась ниже поэтому нужно было переместить переменную
    // тк как она должна быть обьявлена до её использования
    const ringRadius = 300;

    // изменения цвета для колец и добавим её в drawRings и в саму функцию drawRings
    // и присвоим как значение мотода strokeStyle (i)
    const colors = ['#771122', '#bb1122', '#ff1122'];

    // смещение волн относительно друг друга на каждом новом кольце
    // в функции updateRings задать новую переменную offsetAngle
    const waveOffset = 15;

    // изменение начального угла отрисовки окружности для этого понадобиться счетчик
    // будем увеличивать эту переменную внутри функции updateRings сразу после цикла
    // и добавим её в переменную currentAngle
    // текущий угол будет увеличиваться на 1 каждый кадр
    let  startAngle = 0;

    
    function updateRings()
    {
        for (let i = 0; i < numberOfRings; i++)
        {
            let radius = i * ringRadiusOffset + ringRadius;
            // нужно передать полученное значение из radius в drawRing и в самой функцию drawRing в скобках и заменить
            // в уравнении waveAmplitude заменим ringRadius на radius

            // для каждой новой итерации увеличиваем смещение на 15
            // конвертация в радианы Math.PI / 180
            // передача параметров переменной в функцию отрисовки drawRing
            // добавить её в уравнения складывая с углом currentAngle
            // а именно в формулой waveAmplitude
            let offsetAngle = i * waveOffset * Math.PI / 180;
            drawRing(radius, colors[i], offsetAngle);
        }
        // если startAngle больше либо равно 360 то сбросим его на 0 иначе увеличим на 1
        startAngle >= 360? startAngle = 0 : startAngle++;
    }

    let centerX = cnv.width / 2;
    let centerY = cnv.height / 2;

    // заменяем все цыфры на переменные

    const maxWavesAmplitude = 17;
    const numberOfWaves = 7;

    function drawRing(radius, colors, offsetAngle)
    {

        ctx.strokeStyle = colors;
        ctx.lineWidth = 15;

        ctx.beginPath();

        // реализатия такого же эффекта с обратной стороны кольца
        // чтобы волны сначала увеличивались а от конца круга опять уменьшались просто изменим значение j
        // с 0 и 360  ====>  до -180 и 180, и также везде где у нас j  со значением 0 нужно заменить на -180

        for (let j = -180; j < 180; j++)
        {
            // перевод из градусов в радианы
            let currentAngle = (j + startAngle) * Math.PI / 180;

            // эффект перехода окружности в волну и обатно в окружность

            // значение с нуля будет меняться в промежутке от 0 до 1 а саму переменную будем умножать на высоту волны
            let displacement = 0;

            // она равна абсолютному значению j там мы избавляемся от знака минус перед значением переменной
            // замемин значения j в нижних if на значение now
            let now = Math.abs(j);

            // условия при котором значение будет изменяться с 0 на 1 и обратно
            if (now > 70)
            {
                // now будет изменять свое значение на 1 тоесть 71,72,73 и так до 290 тк  360-70 = 290
                displacement = (now - 70) / 70;
            }
            // предотвращение слишком больших волн
            if (displacement >= 1)
            {
                displacement = 1;
            }



            // метод синуса
            // в waveAmplitude нужно поместить значение меняющиеся с каждой итерацией цикла в Радианах,
            // у нас уже есть изменяемая переменная в Радианах currentAngle

            // синус возращает значение от -1 до 1 поэтому домнажаем на 17 дабы увидеть саму волну(увеличиваем высоту волны)
            // домножая на 7 мы увеличиваем кол-во волн, просто умножим угол передаваемый в методе синус на 7
            // это увеличит частоту появления волн на окружности

            // можем добавить ringRadius на результате это не отразиться но позволит убрать из 2 переменных ниже а именно в
            // x, y переменные ringRadius тем самым уменьшив код
            // пример до let x = centerX + Math.cos(currentAngle) * (ringRadius + waveAmplitude);
            // после let x = centerX + Math.cos(currentAngle) * (waveAmplitude);

            // после добавления переменной displacement (котороя ровна 0 или 1) можем контролировать переход волны
            // при умножении на 0 будет 0 и волны просто не будет
            // при умножении на 1 волна будет
            // заменяем ringRadius на radius
            let waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle) * numberOfWaves) * maxWavesAmplitude;

            let x = centerX + Math.cos(currentAngle) * waveAmplitude;
            let y = centerY + Math.sin(currentAngle) * waveAmplitude;

            // если j больше 0 то выполняется одно действие если j меньше 0 то другое
            j > -180? ctx.lineTo(x, y) : ctx.moveTo(x, y);

            // откуда
            // ctx.moveTo(x, y);
            // куда
            // ctx.lineTo(x, y);
        }


        // закрывает путь
        ctx.closePath();
        // рисует линию
        ctx.stroke();
    }

    function loop()
    {

        // стирание прошлых отрисовок
        // кэнвас запускает метод изменения ширины, в свою очередь этот метод очищает кэнвас,
        // но тк как мы передаем битовую операцию, а метод не принимает биты в качестве ширины то он просто очищает холст не меняя его размер
        cnv.width |= 0;
        // сверху и знизу одни и теже записи только первая короче
        // ctx.clearRect(0, 0, cnv.width, cnv.height);

        updateRings();
        // функция зацикливается и кадры будут обновляться примерно 60 кадров в секунду
        requestAnimationFrame(loop);
    }
    loop();
})();