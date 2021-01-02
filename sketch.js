const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,side0,side1,side2;

function preload(){
	
}

function setup() {
  createCanvas(900, 400);

  engine = Engine.create();
  world = engine.world;

  paper = new Paper(100, 100, 10);
  ground = new Ground(400, 380, 1000, 20);
  
  side0 = new Box(650, 320, 20, 100);
  side1 = new Box(735, 360, 150, 20);
  side2 = new Box(820, 320, 20, 100);
  
  Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  paper.display();
  ground.display();

  side0.display();
  side1.display();
  side2.display();
  
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, {x:16, y: -15})
	}
}