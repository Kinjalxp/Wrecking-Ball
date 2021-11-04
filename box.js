class Box{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.8,
            density: 0.04
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/Ice-cream.png");
        World.add(myWorld,this.body);
    }
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("white");
        image(this.image,0,0,this.width,this.height);
        pop ();
    }
}