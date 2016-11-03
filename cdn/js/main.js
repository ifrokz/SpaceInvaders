$(document).ready(function(){
    start();
});

function start(){
    resizeCanvas();
    temp = setTimeout("loop()", 1000);
}

function loop(){
    console.log("xd");
    clearTimeout(temp);
    temp = setTimeout("loop()", 33);
}