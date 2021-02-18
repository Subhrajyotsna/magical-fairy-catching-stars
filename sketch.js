var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);



	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	//fairy.debug = true;
    
	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	
	
	Engine.run(engine);
	
}


function draw() {
  background(bgImg);
  fairy.velocityX=0;
  fairy.velocityY=0;
  fairy.setCollider("circle",485,-35,50)
  
 
drawSprites();
  keyPressed();
  if(fairy.isTouching(star)) {
	star.setStatic(star,isStatic);	
}


  
}

function keyPressed() {
	//write code here
 if (keyDown("RIGHT_ARROW")) {
	 fairy.velocityX = 2;
 }
 if (keyDown("LEFT_ARROW")) {
	fairy.velocityX = -2;
}
if (keyDown("DOWN_ARROW")) {
	star.velocityY = 4;	
	}

	
}
 




