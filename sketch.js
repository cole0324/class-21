var fixedRect, movingRect, object1, object2, gameobject1, gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1 = createSprite(500,100,80,30);
  gameobject1.shapeColor = "green";
  gameobject2 = createSprite(700,150,80,30)
  gameobject2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, gameobject2)){
    movingRect.shapeColor = "red";
    gameobject2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gameobject2.shapeColor = "green";
  }

  drawSprites();
}


 