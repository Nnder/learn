class Figure {
    constructor(arrayElements) {
        document.querySelector('body').innerHTML = '<canvas id="canvas"></canvas>';
        this.canvas = document.querySelector('#canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.arrayElements = arrayElements;
    }

    move(xTo, yTo, time, arrayIndex){

        let oneMove = setInterval(()=>{

            for (let i = 0; i <= arrayIndex; i++){

                console.log(this.arrayElements[i].x);

                // data
                this.x = this.arrayElements[i].x;
                this.y = this.arrayElements[i].y;
                this.height = this.arrayElements[i].height;
                this.width = this.arrayElements[i].width;
                this.fillStyle = this.arrayElements[i].fillStyle;
                this.strokeStyle = this.arrayElements[i].strokeStyle;
                this.lineWidth = this.arrayElements[i].lineWidth;
                this.figure = this.arrayElements[i].figure;

                // print
                this.ctx.fillStyle = this.fillStyle;
                this.ctx.strokeStyle = this.strokeStyle;
                this.ctx.lineWidth = this.lineWidth;
                this.ctx.fillRect(this.x,this.y,this.width,this.height);

                this.ctx.fill();
                this.ctx.stroke();


                if (this.arrayElements[i].x != xTo) {
                    this.arrayElements[i].x++;
                } else if (this.arrayElements[i].y != yTo){
                    this.arrayElements[i].y++;
                }


            }



            //this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);



            if (this.x === xTo && this.y === yTo){
                clearInterval(oneMove);
                console.log('end');
            }
        }, time)



    }

    changeElements(id, element){
        this.arrayElements[id] = element;
    }

    getElements(){
        return this.arrayElements;
    }

}