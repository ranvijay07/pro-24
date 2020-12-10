class Paper{
    constructor(x,y,r){
        var options={
            restution:1,
            friction:0.2,
            density:1.2,
        }
        this.body=Body.circle(x,y,r,options)
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}