//requestAnimationFrame грузиться быстрее чем css и прорисовка
//requestAnimationFrame медленее чем setTimeout
//queueMicrotask()
//JavaScript всегда выполняеться до рендеринга

function loop() {
    setTimeout(loop, 0);
    console.log("job");
}
function whileTrue() {
    while (true);
}

function setTimeRequest() {
    for (let i = 0; i < 10; i++){
        document.getElementById('asd').style.paddingRight = i + "px";
    }
    setTimeout(setTimeRequest, 0);
    console.log("ready");
}


function requestAnimation() {
    for (let i = 0; i < 10; i++){
        document.getElementById('asd').style.paddingRight = i + "px";
    }
    requestAnimationFrame(requestAnimation);
    console.log("ready");
}


function setTimeAndAnimationRequest() {
    for (let i = 0; i < 1000; i++){
        document.getElementById('asd').style.padding = i + "px";
        requestAnimationFrame(setTimeAndAnimationRequest);
    }
    console.log("ready animation");

    for (let i = 0; i < 1000; i++){
        document.getElementById('asd').style.padding = i + "px";
    }
    setTimeout(setTimeAndAnimationRequest, 0);
    console.log("ready time set");
}


function hidenot() {
    let hidler = document.getElementById('hideItem');
    for (let i = 0; i<1000; i++){
        hidler.style.display = 'block';
        hidler.style.display = 'none';
        hidler.style.display = 'block';
        hidler.style.display = 'none';
        hidler.style.display = 'block';
        hidler.style.display = 'none';
        hidler.style.display = 'block';
        hidler.style.display = 'none';
        hidler.style.display = 'block';
        hidler.style.display = 'none';
        hidler.style.display = 'block';
        hidler.style.display = 'none';
        hidler.style.display = 'block';
        console.log(i);
    }
}
//hidenot();


function moveToX() {
    let xText = document.getElementById('textMoves');
    xText.style.transform = 'translateX(1000px)';
    xText.style.transform = 'transform 1s ease-in-out';
    //xText.style.transform = 'translateX(500px)';
}