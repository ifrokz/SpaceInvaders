cEnemy1 = function(posX,posY){
    this.speedX = 2;
    this.width = 50;
    this.height = 50;
    this.posX = posX-this.width/2;
    this.posY = posY;
}

var enemy1 = new cEnemy1(windowWidth/2,windowWidth/10);