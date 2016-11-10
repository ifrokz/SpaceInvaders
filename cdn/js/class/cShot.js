cShot = function(posX,posY){
    this.speedX = 0;
    this.speedY = windowHeight/100;

    this.height = player.width/5;
    this.width = this.height/2;
    this.posX = posX-this.width/2;
    this.posY = posY+this.height;
    this.move = function(){
        this.posX += this.speedX;
        this.posY -= this.speedY;
        ctx.fillStyle = "red";
        ctx.fillRect(this.posX,this.posY,this.width,this.height);
    }
}