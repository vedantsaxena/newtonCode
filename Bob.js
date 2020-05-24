class Bob {
    constructor(x,y,radius){
        var options={
            "restitution":1,
            "friction":0.1,
            "density":3
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
    }
    display(){
        var pos = this.body.position;
        fill(200,10,10);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
       
    }
}