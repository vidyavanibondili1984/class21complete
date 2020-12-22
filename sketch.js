var fixedRect, movingRect;
var gObject1,gObject2,gObject3,gObject4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,50,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gObject1=createSprite(200,100,50,50);
  gObject1.shapeColor="red";
  gObject2=createSprite(300,100,50,50);
  gObject2.shapeColor="red";
  gObject3=createSprite(400,100,50,50);
  gObject3.shapeColor="red";
  gObject4=createSprite(500,100,50,50);
  gObject4.shapeColor="red";

  movingRect.velocityY = -5;
  movingRect.velocityX=0;
  fixedRect.velocityX=0;
  fixedRect.velocityY = +5;

}

function draw() {
  background(0,0,0);  
  gObject2.x=World.mouseX;
  gObject2.y=World.mouseY;

  if(isTouching(gObject2,gObject1))
  {
   gObject2.shapeColor="green";
   gObject1.shapeColor="green";
 
  }
  else{
   gObject2.shapeColor="red";
   gObject1.shapeColor="red";
  }

if(bounceOff(movingRect,fixedRect))
{
  console.log("true");
  
}
else{
  console.log("false");
  
}
 
  drawSprites();
}
function bounceOff(moving,fixed)
{
  if (moving.x - fixed.x > fixed.width/2 + moving.width/2
    && fixed.x - moving.x > fixed.width/2 + moving.width/2) {
      moving.velocityX = moving.velocityX * (-1);
      fixed.velocityX = fixed.velocityX * (-1);
}
if (moving.y - fixed.y < fixed.height/2 + moving.height/2
  && fixed.y - moving.y < fixed.height/2 + moving.height/2){
    moving.velocityY = moving.velocityY * (-1);
    fixed.velocityY = fixed.velocityY * (-1);
}
}