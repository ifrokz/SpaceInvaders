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
