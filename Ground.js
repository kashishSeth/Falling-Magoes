class Ground{
constructor(x,y,width,height){
var Options = {
    isStatic: true
}
this.body = Bodies.rectangle(x,y,width,height,Options);
this.width = width
this.height = height
World.add(world,this.body);
}
display(){
    var pos = this.body.position
push()
    rectMode(CENTER)
    stroke("Black");
    fill("Green")
    rect(pos.x,pos.y,this.width,this.height);
pop()
}
}