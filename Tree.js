class Tree{
    constructor(x,y){
        var Options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,100,100,Options);
        this.width = 350
        this.height = 350
        this.image = loadImage("images/tree.png");
        World.add(world,this.body);
        }
        display(){
            var pos = this.body.position
 
           imageMode(CENTER);
           image(this.image,pos.x,pos.y,this.width,this.height);        
        }
 }
