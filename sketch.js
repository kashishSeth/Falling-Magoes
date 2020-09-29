
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
var Char;

function preload()
{
  Char = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,680,800,20)
tree = new Tree(600,520);
mango = new Mango(520,425,30);
mango1 = new Mango(577,400,30);
mango2 = new Mango(662,460,30);
mango3 =  new Mango(523,482,30);
mango4 = new Mango(594,440,30);
stone = new Stone(153,583,50);
launcher = new Launcher(stone.body,{x: 158, y: 567 })
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");

  
image(Char,130,530,200,200);
ground.display();
tree.display();
mango.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
stone.display();
launcher.display();
text(mouseX+"," + mouseY,mouseX,mouseY)

detectCollision(stone,mango);
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	launcher.fly()
}

function keyPressed(){
if(keyCode === 32) {
	launcher.attach(stone.body);
	Matter.Body.setPosition(stone.body,{x: 158, y:567})
}
}

function detectCollision(stone,mango){
  mangoPos = mango.body.position	
  stonePos = stone.body.position

  var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
  if(distance<=mango.diameter+stone.diameter)
  {
	  Matter.Body.setStatic(mango.body, false);
  }

}