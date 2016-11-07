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

    }
});

$(document).keyup(function(){
    if(event.which == 37 && player.dir=="left"){player.dir="";console.log(player.dir);}
    if(event.which == 39 && player.dir=="right"){player.dir="";console.log(player.dir);}
    if(event.which == 32){

    }
});