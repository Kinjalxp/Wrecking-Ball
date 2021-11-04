class SlingShot{
    constructor(bodyA,pointB){

        var options = {
            stiffness : 1.2,
            bodyA : bodyA,
            pointB : pointB,
            length: 300
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(myWorld,this.rope);

    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        push ();
        strokeWeight(3);
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop ();
    }
}