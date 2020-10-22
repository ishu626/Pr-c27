
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {

  createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
base=new Roof(400,200,200,20);
bob1=new Ball(320,400,20,20);
bob2=new Ball(360,400,20,20);
bob3=new Ball(400,400,20,20);
bob4=new Ball(440,400,20,20);
bob5=new Ball(480,400,20,20);
rope1=new Rope(bob1.body,base.body,-80,0);
rope2=new Rope(bob2.body,base.body,-40,0);
rope3=new Rope(bob3.body,base.body,0,0);
rope4=new Rope(bob4.body,base.body,40,0);
rope5=new Rope(bob5.body,base.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 base.display();
 
  drawSprites();
 
}
function keyPressed() { 
  if (keyCode === UP_ARROW) { Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); 
} 
}
