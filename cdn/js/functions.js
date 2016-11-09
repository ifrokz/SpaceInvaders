////////////////////////////////////////////////////////
///                       CANVAS                     ///
////////////////////////////////////////////////////////

function initResize(){
    $("#lienzo").attr("width", windowWidth);
    $("#lienzo").attr("height", windowHeight);
    console.log("xd");
}

////////////////////////////////////////////////////////
///                       PLAYER                     ///
////////////////////////////////////////////////////////

function playerManager(){
    player.move();
}

$(document).keydown(function(event){
    if(event.which == 37){player.dir="left";console.log(player.dir);}
    if(event.which == 39){player.dir="right";console.log(player.dir);}
    if(event.which == 32){
        shot.push(new cShot(player.posX+player.width/2,player.posY));
    }
});

$(document).keyup(function(){
    if(event.which == 37 && player.dir=="left"){player.dir="";console.log(player.dir);}
    if(event.which == 39 && player.dir=="right"){player.dir="";console.log(player.dir);}
    if(event.which == 32){

    }
});

////////////////////////////////////////////////////////
///                    Collision                     ///
////////////////////////////////////////////////////////
function collisionManager(){
    shotCollision();
}
function shotCollision(){
    for(var e  in enemy){
        for(var s in shot){
            //if(Math.abs((asteroid[a].posY+asteroid[a].height/2)-(player.getPosY()+playerHeight/2)) < playerHeight/2+asteroid[a].height/2 ){
            if(Math.abs((enemy[e].posX+enemy[e].width/2)-(shot[s].posX+shot[s].width/2))<shot[s].width/2+enemy[e].width/2){
                if(Math.abs((enemy[e].posY+enemy[e].height/2)-(shot[s].posY+shot[s].height/2))<shot[s].width/2+enemy[e].width/2){
                    console.log("xd");
                }
            }
        }
    }
}

////////////////////////////////////////////////////////
///                       Shots                      ///
////////////////////////////////////////////////////////

function shotManager(){
    playerShotMove();
}

function playerShotMove(){
    for(var s in shot){
        shot[s].move();
    }
}

////////////////////////////////////////////////////////
///                       Enemy                      ///
////////////////////////////////////////////////////////

function enemyManager(){
    enemyMove();
}

function enemyMove(){
    for(var e in enemy){
        enemy[e].move();
    }
}





function setLevel() {
    levelCanvas = document.getElementById("lienzo");
    lvCtx = lienzo.getContext("2d");

    lvCtx.drawImage(imglevel,0,0);

    var datos = lvCtx.getImageData(0,0,48,27);
    var ctxData = datos.data;

    for(var i =0;i<ctxData.length;i+=4){
        if(ctxData[i] == 255 && ctxData[i+1] == 255 && ctxData[i+2] == 255){
            // ES UN PIXEL BLANCO
        }else{
            var enemycount = enemy.length;
            enemy.push(new cEnemy1((i/4)%48,Math.floor((i/4)/48)));
            console.log((i/4)/48);
            if(ctxData[i] == 0 && ctxData[i+1] == 0 && ctxData[i+2] == 255){
                //console.log(ctxData[i]+","+ctxData[i+1]+","+ctxData[i+2]+","+ctxData[i+3]+" - Blue");
                enemy[enemycount].type = "blue";
            }
            if(ctxData[i] == 0 && ctxData[i+1] == 255 && ctxData[i+2] == 0){
                //console.log(ctxData[i]+","+ctxData[i+1]+","+ctxData[i+2]+","+ctxData[i+3]+" - Green");
                enemy[enemycount].type = "green";
            }
            if(ctxData[i] == 255 && ctxData[i+1] == 0 && ctxData[i+2] == 0){
                //console.log(ctxData[i]+","+ctxData[i+1]+","+ctxData[i+2]+","+ctxData[i+3]+" - Red");     
                enemy[enemycount].type = "red";
            }
            console.log(enemy[enemycount]) 
        }
    }
     
}