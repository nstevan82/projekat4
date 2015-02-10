var player1Points=0,
	player2Points=0;
var canvasWidth=550;
var canvasHeight=600;
var player1Y=0,
	player2Y=0;
var player1Height=100,
    player2Height=100;
var ballX=100,
	ballY=100;
var ballDirX=Math.floor((Math.random() * 2) + 1),
	ballDirY=Math.floor((Math.random() * 2) + 1);
var ballSpeed=8;
if (ballDirX==2) ballDirX=ballSpeed;
if (ballDirX==1) ballDirX=-ballSpeed;
if (ballDirY==2) ballDirY=ballSpeed;
if (ballDirY==1) ballDirY=-ballSpeed;

var ballRadius=10;

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");