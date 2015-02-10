
setInterval(redraw,30);
function redraw(){
player2Y=ballY;
if (ballX-ballRadius<=0)  {ballDirX=ballSpeed;player2Points++}
if (ballX+ballRadius>=canvasWidth)  {ballDirX=-ballSpeed;}
if (ballY-ballRadius<=0)  ballDirY=ballSpeed;
if (ballY+ballRadius>=canvasHeight)  ballDirY=-ballSpeed


if (ballX-ballRadius<=20 && ballY>player1Y && ballY<=player1Y+player1Height)  {ballDirX=ballSpeed;player1Points++;if (player1Points%10==0) ballSpeed++;}
if (ballX+ballRadius>=canvasWidth-20 && ballY+ballRadius>=player2Y && ballY<=player2Y+player2Height)  ballDirX=-ballSpeed;


ballX=ballX+ballDirX;
ballY=ballY+ballDirY;


ctx.clearRect ( 0 , 0 , canvasWidth, canvasHeight );
ctx.fillStyle = "white";


ctx.font="20px Verdana";
ctx.fillStyle = "red";
ctx.fillText("PLAYER 1:"+player1Points+"   PlAYER2:"+player2Points+" LEVEL:"+ballSpeed,10,15);

ctx.fillStyle = "blue";
ctx.fillRect(0,player1Y,20,player1Height);


ctx.fillStyle = "red";
ctx.fillRect(canvasWidth-20,player2Y,20,player2Height);

ctx.fillStyle = "black";
ctx.beginPath();

ctx.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);

ctx.closePath();
ctx.fill();


}

function follow(evt) {if (evt.pageY<=canvasHeight-player1Height) player1Y=evt.pageY}
document.onmousemove = follow;