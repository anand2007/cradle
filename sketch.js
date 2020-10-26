
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var table;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter = 40;

	table = new Table(400,200,250,20);
	bob1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2 = new Bob(350,400);
	bob3 = new Bob(400,400);
	bob4 = new Bob(450,400);
	bob5 = new Bob(500,400);
	rope1 = new Rope(table.body, bob1.body);
	rope2 = new Rope2(table.body, bob2.body);
	rope3 = new Rope3(table.body, bob3.body);
	rope4 = new Rope4(table.body, bob4.body);
	rope5 = new Rope5(table.body, bob5.body);
	// bob1.x = mouseX;
	// bob1.y = mouseY;


	keyPressed();
	
	Engine.run(engine);


	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  table.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 

}


function keyPressed()
{
	if(keyCode === DOWN_ARROW)
	{
		 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40, y:-40});

	}
}
