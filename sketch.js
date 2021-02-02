
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,bin2,bin3, paper;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
paper = new Paper(50,50,70);

bin1  = new Dust(500,670,200,20);
bin2  = new Dust(410,630,20,100);
bin3  = new Dust(590,630,20,100);

ground = new Ground(400,690,1000,20);


	//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  background(0);
  
 
 paper.display();
bin1.display();
bin2.display();
bin3.display();
ground.display();
}

function keyPressed(){

if (keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:15, y:-10})
}
}

