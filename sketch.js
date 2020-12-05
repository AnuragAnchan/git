var fixedRect, movingRect;
var o1,o2,o3,o4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  o1=createSprite(100,100,50,50);
  o1.shapeColor="blue";
  o2=createSprite(200,100,50,50);
  o2.shapeColor="yellow";
  o3=createSprite(300,100,50,50);
  o3.shapeColor="brown";
  o4=createSprite(400,100,50,50);
  o4.shapeColor="pink";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  movingRect.velocityY=-5;
  fixedRect.velocityY=5;

  if (isTouching(movingRect,o4)){
    movingRect.shapeColor="blue";
    o4.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="green";
    o4.shapeColor="green";
  }
  bounceoff(movingRect,fixedRect);
  drawSprites();
}
