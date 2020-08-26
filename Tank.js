class Tank{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
    }
    display(){
    rect(this.x,this.y,this.width,this.height);

    }
}