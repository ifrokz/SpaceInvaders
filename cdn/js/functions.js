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
                    alert("xd");
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