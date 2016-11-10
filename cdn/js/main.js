$(document).ready(function(){
    start();
});

function start(){
    initResize();
    temp = setTimeout("loop();",1000)
}

function loop(){
    ctx.clearRect(0,0,windowWidth,windowHeight);
    // PLAYER
    playerManager();
    enemyManager();
    shotManager();
    collisionManager()

    newLevel();
    // TEMP
    clearTimeout(temp);
    temp=setTimeout("loop();",17);
}