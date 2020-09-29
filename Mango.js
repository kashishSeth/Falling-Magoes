class Mango{    
    constructor(x,y,diameter){
    var Options = {
        isStatic: true,
        friction: 1,
        restitution: 0
    }

    this.body = Bodies.circle(x,y,diameter/2,Options);
    this.diameter = diameter

    this.image = loadImage("images/mango.png");
    World.add(world,this.body);
    
}
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
       translate(pos.x,pos.y)
       rotate(angle)
       imageMode(CENTER);
       image(this.image,0,0,this.diameter,this.diameter);       
       pop();
    }
}
