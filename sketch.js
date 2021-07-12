
function setup() {
  createCanvas(600,600);
  bunny = createSprite(40,550,15,15); 
  carrot = createSprite(560,40,30,30);
  brick1 = createSprite(80,280,120,20);
  brick2 = createSprite(10,330,120,20);
  brick3 = createSprite(160,330,120,20);
  brick4 = createSprite(310,330,120,20);
  brick5 = createSprite(460,330,120,20);
  brick6 = createSprite(610,330,120,20);
  brick7 = createSprite(230,280,120,20);
  brick8 = createSprite(380,280,120,20);
  brick9 = createSprite(530,280,120,20);
  
  bunny.shapeColor = "white"
  carrot.shapeColor = "pink"
  brick1.shapeColor = "brown"
  brick2.shapeColor = "brown"
  brick3.shapeColor = "brown"
  brick4.shapeColor = "brown"
  brick5.shapeColor = "brown"
  brick6.shapeColor = "brown"
  brick7.shapeColor = "brown"
  brick8.shapeColor = "brown"
  brick9.shapeColor = "brown"
  
  }
function draw() {
    background("green");
    bunny.x=bunny.X;
    bunny.y=bunny.Y;
    
if(bunny.isTouching(carrot)){
  text("YOU WIN",200,200);
}
if(bunny.isTouching(brick1)){
  bunny.x=40;
  bunny.y=550;
}

if(bunny.isTouching(brick2)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick3)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick4)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick5)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick6)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick7)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick8)){
  bunny.x=40;
  bunny.y=550;
}
if(bunny.isTouching(brick9)){
  bunny.x=40;
  bunny.y=550;
}
  drawSprites();
}

function generateWorms(){
  if ( frameCount % 30===0);
   console.log(frameCount);
   var worm = createSprite(100,350,40,5);
   worm.shapeColor = "green";
   worm.velocityX=random(-4,4);
   worm.velocityY=random(-4,4);
   wormGroup.add(worm);
  
  }
  