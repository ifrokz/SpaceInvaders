cPlayer = function(){
    this.width = windowWidth/25;
    this.height = this.width;
    this.speedX = 0;
    this.posX = windowWidth/2-this.width/2;
    this.posY = windowHeight-this.height;
    this.dir = "";
    this.move = function(){
        if(this.dir=="right"){
            this.speedX+=Math.ceil(windowWidth/1500);
            if(this.speedX>Math.ceil(windowWidth/80)){
                this.speedX = Math.ceil(windowWidth/80);
            }
        }else if(this.dir=="left"){
            this.speedX-=Math.ceil(windowWidth/1500);
            if(this.speedX<-Math.ceil(windowWidth/80)){
                this.speedX = -Math.ceil(windowWidth/80);
            }
        }else{
            if(this.speedX>0){
                this.speedX-=Math.ceil(windowWidth/1500);
            }else if(this.speedX<0){
                this.speedX+=Math.ceil(windowWidth/1500);
            }
        }

        if(this.posX<0){
            this.speedX = 0;
            this.posX = 0;
        }else if(this.posX+this.width>windowWidth){
            this.speedX =0
            this.posX = windowWidth-this.width;
        } 

        this.posX += this.speedX;

        ctx.drawImage(playerImg,this.posX,this.posY,this.width,this.height);

        /*ctx.fillStyle = "red";
        ctx.fillRect(this.posX,this.posY,this.width,this.height);*/
    }
}

var player = new cPlayer();