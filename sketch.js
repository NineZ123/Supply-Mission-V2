var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var box_1, box_2, box_3;
var box_1Body, box_2Body, box_3Body;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	box_1=createSprite(400, 650, 200,20);
	box_1Body = Bodies.rectangle(400, 650 ,200,20 , { isStatic:true});
	box_1.shapeColor=("red");

	box_2=createSprite(500,610,20,100);
	box_2Body = Bodies.rectangle(500, 610 ,20,100 , {isStatic:true});
	box_2.shapeColor=("red");

	box_3=createSprite(300,610,20,100);
	box_3Body = Bodies.rectangle(300, 610 ,20,100 , {isStatic:true});
	box_3.shapeColor=("red");

	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;



	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 
  box_1.x= box_1Body.position.x 
  box_1.y= box_1Body.position.y
    Matter.Body.setStatic(box_1Body,true); 

  box_2.x= box_2Body.position.x 
  box_2.y= box_2Body.position.y
  Matter.Body.setStatic(box_2Body,true); 

  

  box_3.x= box_3Body.position.x 
  box_3.y= box_3Body.position.y 
  Matter.Body.setStatic(box_3Body,true);
 
  drawSprites();
 
if (packageSprite.isTouching(box_1)){
	Matter.Body.setStatic(packageBody,true);
}

}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



