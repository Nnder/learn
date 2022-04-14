(function () {
    let canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    h = canvas.height = innerHeight,
    w = canvas.width = innerWidth,
    particles = [],
    properties = {
        bgColor:'rgba(17,17,19,1)',
        particleColor:'rgb(29,255,0)',
        particleRadius: 4,
        particleCount: 455,
        particleMaxVelocity: 1.5,
        lineLength: 110,
        particleLife: 60*20,
    };

    document.querySelector('body').appendChild(canvas);

    window.onresize = function () {
        h = canvas.height = innerHeight,
        w = canvas.width = innerWidth;
    };

    class Particle{
        constructor(){
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.velocityX = Math.random() * (properties.particleMaxVelocity * 2)-properties.particleMaxVelocity;
            this.velocityY = Math.random() * (properties.particleMaxVelocity * 2)-properties.particleMaxVelocity;
            //life
            this.life = Math.random() * properties.particleLife * 60;
        }
        // neeeeeeed
        position(){
            this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0? this.velocityX*=-1 : this.velocityX;
            this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0? this.velocityY*=-1 : this.velocityY;
            this.x += this.velocityX;
            this.y += this.velocityY;
        }
        reDraw(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI*2);
            ctx.closePath();
            ctx.fillStyle = properties.particleColor;
            ctx.fill();
        }
        //life
        reCalculateLife(){
            if (this.life < 1){
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.velocityX = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                this.velocityY = Math.random() * (properties.particleMaxVelocity * 2) - properties.particleMaxVelocity;
                this.life = Math.random() * properties.particleLife * 60;
            }
            this.life--;
        }
    }

    function reDrawBackground() {
        ctx.fillStyle = properties.bgColor;
        ctx.fillRect(0, 0, w, h);
    }
    // соединения между точками
    function drawLines() {
        let x1, y1 ,x2 ,y2, length, opacity;
        for ( let i in particles) {
            for (let j in particles){
                x1 = particles[i].x;
                y1 = particles[i].y;
                x2 = particles[j].x;
                y2 = particles[j].y;
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if (length < properties.lineLength){
                    // самое большое чисто которое может получиться исходя из этой формулы это 1
                    opacity = 1-length/properties.lineLength;
                    ctx.lineWidth = '0,5';
                    ctx.strokeStyle = 'rgba(141, 26, 255, '+opacity+')';
                    ctx.beginPath();
                    ctx.moveTo(x1 ,y1);
                    ctx.lineTo(x2 ,y2);
                    // закрываем путь
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    function reDrawParticles() {
        for (let i in particles){
            //life
            particles[i].reCalculateLife();
            //
            particles[i].position();
            particles[i].reDraw();
        }

    }
    
    function loop() {
        requestAnimationFrame(loop);
        reDrawBackground();
        reDrawParticles();
        drawLines();
    }

    function init() {

        for (let i = 0 ; i < properties.particleCount ; i++){
            particles.push(new Particle());
        }
        loop();
    }
    init();
}());


