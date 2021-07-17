
var path,path_Img;
var runner,runner_Img;
var coin1,coin1_Img
var coin2,coin2_Img
var coin3,coin3_Img
var coin4,coin4_Img
var coin5,coin5_Img
var coin6,coin6_Img
var coin7,coin7_Img
var coin8,coin8_Img
var invisibleboundary;

function preload(){
  //pre-load images
  path_Img=loadImage("path.png");
  coin1_Img=loadImage("coin.png");
  coin2_Img=loadImage("coin.png");
  coin3_Img=loadImage("coin.png");
  coin4_Img=loadImage("coin.png");
  coin5_Img=loadImage("coin.png");
  coin6_Img=loadImage("coin.png");
  coin7_Img=loadImage("coin.png");
  coin8_Img=loadImage("coin.png");
  runner_Img=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  invisibleboundary=createSprite(230,230,400,400); 

path=createSprite(200,200,400,400);
path.addImage(path_Img);
path.velocityY=4;
path.scale=0.9;

runner=createSprite(200,300,30,30);
runner.addAnimation("Runner",runner_Img);
runner_Img.velocityY=4;
runner.scale=0.05;

coin1=createSprite(120,120,30,30);
coin1.addImage(coin1_Img);
coin1.scale=0.5;

coin2=createSprite(120,50,30,30);
coin2.addImage(coin2_Img);
coin2.scale=0.5;

coin3=createSprite(120,350,30,30);
coin3.addImage(coin3_Img);
coin3.scale=0.5;

coin4=createSprite(287,120,30,30);
coin4.addImage(coin4_Img);
coin4.scale=0.5;

coin5=createSprite(287,250,30,30);
coin5.addImage(coin5_Img);
coin5.scale=0.5;

coin6=createSprite(287,50,30,30);
coin6.addImage(coin6_Img);
coin6.scale=0.5;

coin7=createSprite(120,250,30,30);
coin7.addImage(coin7_Img);
coin7.scale=0.5;

coin8=createSprite(287,350,30,30);
coin8.addImage(coin8_Img);
coin8.scale=0.5;
}

function draw() {
  background("white");
  invisibleboundary.visible=false;

 runner.x=World.mouseX; 
 runner.y=World.mouseY;

 if (path.y > 250) {
 path.y=height/2;
 }

 if (runner.isTouching(coin1)) {
 coin1.destroy();
 }

 if (runner.isTouching(coin2)) {
  coin2.destroy();
  }

  if (runner.isTouching(coin3)) {
    coin3.destroy();
    }

    if (runner.isTouching(coin4)) {
      coin4.destroy();
      }

      if (runner.isTouching(coin5)) {
        coin5.destroy();
        }

        if (runner.isTouching(coin6)) {
          coin6.destroy();
          }

          if (runner.isTouching(coin7)) {
            coin7.destroy();
            }

            if (runner.isTouching(coin8)) {
              coin8.destroy();
              }
drawSprites();
}
