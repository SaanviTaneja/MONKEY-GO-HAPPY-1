
var monkey , monkey_running;
var ground;
var invisibleGround;
var banana ,bananaImage;
var obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");

 
}





function setup() {

createCanvas(400,400);
  

  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale = 0.1;

  
ground = createSprite(400,350,900,10);
ground.velocityX = -4;

invisibleGround = createSprite(400,355,900,10);
invisibleGround.visible = false;


foodGroup = new Group();
obstacleGroup = new Group()

  
}


function draw() {
  background("lightgreen");
    console.log(getFrameRate());

  
if(keyDown("space")){
  monkey.y =monkey.y-15;
}
  monkey.velocityY = monkey.velocityY + 0.5;
  
  
   score = score + Math.round(getFrameRate()/60);
   
  
  if(ground.x<0){
    
    ground.x = ground.width/2;
  }
  food();
  obstacles();

  monkey.collide(invisibleGround);

  drawSprites();
  text("survival time = "+ score, 100,50);
   
 
}
 
function food (){
  if (frameCount % 80 === 0) {
banana = createSprite(200,120,20,20);
banana.addImage(bananaImage);
banana.scale = 0.1;
banana.y = Math.round(random(120,200));
banana.velocityX = -3;
banana.lifetime = 200;
foodGroup.add(banana);
  }  
}

function obstacles (){
  if (frameCount % 300 === 0) {
obstacle = createSprite(200,340,20,20);
obstacle.addImage(obstacleImage);
obstacle.scale = 0.1;
obstacle.velocityX = -4;
obstacle.lifetime = 200;
obstacleGroup.add(obstacle);
  }  
}