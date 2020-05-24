class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
  
    display(){
        if (this.rope.bodyA){

        
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(3);

        var hold1X = pointA.x;
        var hold1Y = pointA.y;

        var hold2X = pointB.x+this.offsetX;
        var hold2Y = pointB.y+this.offsetY;

        line(hold1X,hold1Y,hold2X,hold2Y);
        }
    }
}