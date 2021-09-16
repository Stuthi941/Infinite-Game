var bg, bgIMG;
var fish,fishIMG;
var fish2, fish2IMG;
var shark, sharkIMG;
var horse, horseIMG;


function preload(){
  bgIMG = loadImage("ocean.jpeg");
  fishIMG = loadImage("fish1.png");
  fish2IMG = loadImage("fish2.png");
  sharkIMG = loadImage("shark.png");
  horseIMG = loadImage("seaHorse.png");
}

function setup() {
  createCanvas(1000,600);
  bg = createSprite(500,300);
  bg.scale = 1.7;
  bg.addImage(bgIMG);

  fish = createSprite(900,400);
  fish.addImage(fishIMG);
  fish.scale = 0.06;
  fish.velocityX = -2;
  

  fish2 = createSprite(1000,500);
  fish2.addImage(fish2IMG);
  fish2.scale = 0.03;
  fish2.velocityX = -4;

  shark = createSprite(10,300);
  shark.addImage(sharkIMG);
  shark.scale = 0.3;
  shark.velocityX = 3;

  horse = createSprite(950,100);
  horse.addImage(horseIMG);
  horse.scale = 0.04;
  horse.velocityX = -3;

}

function draw() {
  background(0);  
  
  if (fish.x<0){
    fish.x = 1000;
  }
  if (fish2.x<0){
    fish2.x = 1000;
  }
  if (shark.x>1000){
    shark.x = 0;
  }
  if (horse.x<0){
    horse.x = 1000;
  }



  drawSprites();
}