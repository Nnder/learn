let clock = document.getElementById('clock');
let color = document.getElementById('color');
let date = document.getElementById('fullDate');

function hexClock() {
    let time = new Date();
    let s = time.getSeconds().toString();
    let m = time.getMinutes().toString();
    let h = time.getHours().toString();
    let week = time.getDay().toString();
    let M = time.getMonth().toString();
    let y = time.getFullYear().toString();
    let d = time.getDate().toString();

    if (s.length < 2){
        s = '0' + s;
    }
    if (m.length < 2){
        m = '0' + m;
    }
    if (h.length < 2){
        h = '0' + h;
    }

    if (week.length === 0) {
        week = 'Sunday';
    }
    if (week.length === 1){
        week = 'Monday';
    }
    if (week.length === 2){
        week = 'Tuesday';
    }
    if (week.length === 3){
        week = 'wednesday';
    }
    if (week.length === 4){
        week = 'Thursday';
    }
    if (week.length === 5){
        week = 'Friday';
    }
    if (week.length === 6){
        week = 'Saturday';
    }

    let clockSting = h + ':' + m + ':' + s;
    let colorString = '#' + h + m + s;
    let fullDate = s + ' Seconds ' + m + ' Minutes ' + h + ' Hours ' + d + ' Days ' + ++M + ' Month ' + y + ' Years ' + week + ' Day Of Week ';

    date.textContent = fullDate;
    clock.textContent = clockSting;
    color.textContent = colorString;

    document.body.style.background = colorString;
}
hexClock();
setInterval(hexClock, 1000 );