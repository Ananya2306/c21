var fixedRect,movingRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.velocityX = -5;
  movingRect.debug = true;
  
}


function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  edges = createEdgeSprites();
  movingRect.bounceOff(edges[1]);
  bounceOff(movingRect,fixedRect);

  drawSprites();
}


