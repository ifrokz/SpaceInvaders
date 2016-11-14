var temp = "";

var canvas = document.getElementById("lienzo");
var ctx = canvas.getContext("2d");

windowWidth = window.innerWidth;
windowHeight = window.innerHeight;



//////////////  PLAYER //////////////
    // Shots 
    var numShot = 0;
    var shot = new Array();
//Enemys
var enemy = new Array();
    // Red
var enemyImgRed = new Image();
enemyImgRed.src = "cdn/img/enemy/1.png"
    // Green
var enemyImgGreen = new Image();
enemyImgGreen.src = "cdn/img/enemy/2.png";
    // Blue
var enemyImgBlue = new Image();
enemyImgBlue.src = "cdn/img/enemy/3.png"
    //Yellow
var enemyImgYellow = new Image();
enemyImgYellow.src = "cdn/img/enemy/4.png"

/// LEVELS ///
var level = 0;
var totalLevels = 3;
var levelImg = new Array();
for(var i = 1;i<=totalLevels;i++){
    levelImg[i] = new Image();
    levelImg[i].src= "cdn/img/level/"+i+".png";
}
