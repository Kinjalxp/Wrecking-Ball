class Ball{
    constructor(x,y,r){
        var options = {
            density: 1
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;

        this.image = loadImage("Images/sun.png");

        World.add(myWorld,this.body);
    }

    display(){
        push ();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
        pop ();
    }
}