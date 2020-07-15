//Global Variables
var bananaImage, banana, bananaGroup;
var obstacleImage, obstacle, obstacleGroup;
var backImage, backgrnd, ground, groundImage;
var score;
var player, monkey;


function preload(){
  backImage = loadImage("jungle.jpg");
  player = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
  groundImage = loadImage("ground.jpg");
}


function setup() {
  createCanvas(600,300);
  backgrnd = createSprite(100,30,1000,0);
  backgrnd.x = backgrnd.width/2;
  backgrnd.addImage("background",backImage);
  backgrnd.velocityX = -3;
  
  monkey = createSprite(100,225,0,0);
  monkey.addAnimation("monkey", player);
  monkey.scale = 0.12;
  
  ground = createSprite(300,255,600,2);
  ground.visible = false;
  score = 0;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw(){
  background(255); 
  if (backgrnd.x < 100){
   backgrnd.x = backgrnd.width/2;
  }
  if(keyDown("space") && monkey.collide(ground)) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.4;
  monkey.collide(ground);
  
  switch(score){
    case 10: monkey.scale = 0.15; break;
    case 20: monkey.scale = 0.18; break;
    case 30: monkey.scale = 0.21; break;
    case 40: monkey.scale = 0.24; break;
    default: break;
  }
  
  if(obstacleGroup.isTouching(monkey)){
  monkey.scale = 0.12
  }
   
  food();
  obstacles();
   
 drawSprites();
 stroke("white");
 fill("white");
 textSize(20);
 text("Score: " + score, 350,35);
}

function food() {
  if(frameCount % 80 === 0){
    banana = createSprite(600,random(100,200),0,0);
    banana.addImage("Banana", bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    banana.lifetime = 200;
    bananaGroup.add(banana);
  } 
}

function obstacles() {
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,230 ,0,0);
    obstacle.addImage("Stone",obstacleImage);
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacle.scale = 0.15;
    obstacleGroup.add(obstacle);
  }
}