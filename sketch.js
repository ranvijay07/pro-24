
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin= new Dustbin(600,750)

	ground=new Ground(400,750,15,1000)

   var options={
	   isStatic:false,
	   restitution:0.3,
	   friction:1,
	   density:0.5,
   }

    paper=new Paper(390,740,15,options)
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();

  keyPressed();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.forceApply(paper.body,paper.body.position,{x:85,y:85})
	}
}


