let cnv = document.getElementById('cnv');
let ctx = cnv.getContext('2d');
let w = cnv.width = window.innerWidth;
let h = cnv.height = window.innerHeight;

ctx.strokeStyle = '#000';
ctx.lineWidth = 10;
let angle = 0;

let interval = setInterval(update, 15);

function update(){
   ctx.clearRect(0,0,w,h);
   tree(w / 2, h / 2 + 300, -Math.PI / 2, 400, 9);
   angle += 0.01;
}

function tree(x, y, dir, l, iteration){
   let x1 = x + Math.cos(dir) * 1;
   let y1 = y + Math.sin(dir) * 1;
   ctx.beginPath();
   ctx.moveTo(x, y);
   ctx.lineTo(x1, y1);
   ctx.stroke();
   if(iteration > 0){
      tree(x1, y1, dir, 1 * 0.5, iteration - 1);
      tree(x1, y1, dir + angle, 1 * 0.5, iteration - 1);
      tree(x1, y1, dir - angle, 1 * 0.5, iteration - 1);
   }

}