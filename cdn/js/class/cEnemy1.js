cEnemy1 = function(posX,posY,type){
    this.speedX = 5;
    this.width = windowWidth/32;
    this.height = windowHeight/18;
    this.posX = (posX*this.width)+this.width/2;
    this.posY = (posY*this.height)+this.width/2;
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
        if(this.type== "red"){
            ctx.drawImage(enemyImgRed,this.posX,this.posY,this.width,this.height);
        }else if(this.type == "green"){
            ctx.drawImage(enemyImgGreen,this.posX,this.posY,this.width,this.height);
        }else if(this.type == "blue"){
             ctx.drawImage(enemyImgBlue,this.posX,this.posY,this.width,this.height);
        }else{
            ctx.drawImage(enemyImgYellow,this.posX,this.posY,this.width,this.height);
        } 
    }
}

