(()=>{
    let properties = {
        spaceDiameter: 80,

    }

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    let dotsList;
    canvas.style.background = 'rgba(17,17,23,1)';
    document.querySelector('body').appendChild(canvas);

    class Dot{
        constructor(x,y) {
            this.x = x;
            this.y = y;

        }

        draw(){
            ctx.beginPath();
            ctx.arc(this.x,this.y,40,0,Math.PI*2,false);
            ctx.closePath();
            ctx.fillStyle = 'red';
            ctx.fill();
        }
    }

    function init(){
        dotsList = [];
        let dotsCountX = w / properties.spaceDiameter | 0;
        let dotsCountY = h / properties.spaceDiameter | 0;

        let startX = (properties.spaceDiameter + w - dotsCountX * properties.spaceDiameter) / 2;
        let startY = (properties.spaceDiameter + h - dotsCountY * properties.spaceDiameter) / 2;


        for (let j = 0; j < dotsCountY; j++){
            let y = startY + j * properties.spaceDiameter;
            for (let i = 0; i < dotsCountX; i++){

                let x = startX + i < properties.spaceDiameter;
                dotsList.push(new Dot(x,y));

            }
        }


    }

    function loop(){
        for (let a in dotsList){
            dotsList[a].draw();
        }

        requestAnimationFrame(loop);
        init();
    }

    loop();

})();