class Stone{    
    constructor(x,y,diameter){
    var Options = {
        isStatic: true,
        friction: 1,
        restitution: 0.2
    }

    this.body = Bodies.circle(x,y,diameter/2,Options);
    this.diameter = diameter

    this.image = loadImage("images/stone.png");
    World.add(world,this.body);
    
}
    display(){
        var pos = this.body.position
        
        push()
       translate(pos.x,pos.y)
       imageMode(CENTER);
       image(this.image,0,0,this.diameter,this.diameter);       
       pop();
    }
}