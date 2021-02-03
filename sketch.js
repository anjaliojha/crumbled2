const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	paper= new Paper(50,345,70);
	
	
	ground = new Ground(400,350,800,20);
	

	dustbin1 = new Dust(700,260,150,20);
	
	
	dustbin2 = new Dust(650,260,20,120);
	

	dustbin3 = new Dust(730,260,20,120);
	

	Engine.run(engine);
  
}


function draw(){
  rectMode(CENTER);
  background("grey");

  paper.display();
  ground.display();
  
  dustbin2.display();
  dustbin3.display();
  dustbin1.display();
  
  
 
}                                                                                       
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-90});
	}
}





