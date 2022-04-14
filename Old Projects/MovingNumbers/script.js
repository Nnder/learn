const time = 80000; // ms
const step = 1;

function outNum(num, elem) {
    let l = document.querySelector('#' + elem);
    let n = 0;
    // step === 0 ? step = 1 : step === step;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if (n === num) {
            clearInterval(interval);
        }
        l.innerHTML = n;
    },);
}

outNum(1000,'out-1');