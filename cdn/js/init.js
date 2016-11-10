var temp = "";

var canvas = document.getElementById("lienzo");
var ctx = canvas.getContext("2d");

windowWidth = window.innerWidth;
windowHeight = window.innerHeight;

var enemyImg = new Image();
enemyImg.src = "cdn/img/player/1.png";

//////////////  PLAYER //////////////
    // Shots 
    var numShot = 0;
    var shot = new Array();
//Enemy1
var enemy = new Array();


/// LEVELS ///
var level = 0;
var totalLevels = 2;
var levelImg = new Array();
for(var i = 1;i<=totalLevels;i++){
    levelImg[i] = new Image();
    levelImg[i].src= "cdn/img/level/"+i+".png";
}
