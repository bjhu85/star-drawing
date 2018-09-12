var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');


function filledStar(x, y, r) {
  
  ctx.save();
  ctx.translate(x, y); 
  ctx.beginPath();
  ctx.moveTo(0, -r/2);
  
    for(i=1; i<=5; i++) {
      ctx.rotate((Math.PI * 2 / 5) * 2 );
      ctx.lineTo(0, -r / 2);
  
    }
  
  ctx.fillStyle="#FF6699";
  ctx.fill();
  ctx.restore();

 }

filledStar(40, 50, 75);
filledStar(130, 120, 100);
filledStar(250, 220, 150);

