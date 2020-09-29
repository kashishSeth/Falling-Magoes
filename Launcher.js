class Launcher{
    constructor(body1,pointA){
    var Options ={
        bodyA: body1,
        pointB: pointA,
        stiffness: 0.004,
        length: 20
    }
    this.pointB = pointA
    this.launcher = Constraint.create(Options);
    World.add(world,this.launcher);
    }
    fly(){
        this.launcher.bodyA = null
    }
    attach(body){
        this.launcher.bodyA = body
    }

    display(){
        if(this.launcher.bodyA){
        
        var pos = this.launcher.bodyA.position
        line(pos.x,pos.y,this.pointB.x,this.pointB.y);

    }
}
}