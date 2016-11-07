cEnemy1 = function(posX,posY,type){
    this.speedX = 5;
    this.width = 50;
    this.height = 50;
    this.posX = posX-this.width/2;
    this.posY = posY;
    this.type = type;
    this.move = function(){
        if(this.posX+this.width>=windowWidth){
            this.speedX = -5;
            this.posY += this.height;
        }else if(this.posX <= 0){
            this.speedX = 5;
            this.posY += this.height;
        }
        this.posX+=this.speedX
        ctx.drawImage(enemyImg,this.posX,this.posY,this.width,this.height);
    }
}

enemy[0] = new cEnemy1(windowWidth/2,windowWidth/10);