
var mouse
var cat;
var cheese;
var yarn;
var mousetrap;
var bg; mouseImg; catImg; cheeseImg; yarnImg; mousetrapImg;deadmouseImg, deadcatImg;
var edges;
var x;y;x1;y1

function preload()
{
  bg = loadImage("floor1.webp")
  mouseImg = loadImage("mouse.png")
  catImg = loadImage("cat.png")
  cheeseImg = loadImage("cheese.png")
  yarnImg = loadImage("yarn.png")
  mousetrapImg = loadImage("mousetrap.jpg")
  deadcatImg = loadImage("deadcat.png")
  deadmouseImg = loadImage("deadmouse.png")
}
function setup() {
  createCanvas(800,400);
  edges = createEdgeSprites()

  mouse = createSprite(width-50, height-255, 30,30)
  mouse.addImage(mouseImg)
  mouse.scale = 0.3

  cat = createSprite(width -255, height-255, 30 , 30)
  cat.addImage(catImg)
  cat.scale = 0.5
  cat.velocityX = -1
  


  
}

function draw() {
  background(255,255,255);  
  image(bg, 0,0, width, height);

  if(keyDown(LEFT_ARROW))
  {
    mouse.x -= 5
  }

  if(keyDown("space")){
    mouse.velocityY -= 3
  }
  if (mouse.velocityY <= 0){
    mouse.velocityY += 0.1
  }
  mouse.bounceOff(edges)
  spawnYarn()
  spawnCheese()
  drawSprites();
}

function spawnYarn()
{
  if(frameCount % 60 === 0){
    x = Math.round(random(1,800))
    y = Math.round(random(1,500))
    yarn = createSprite(x,y,30,30)
    yarn.addImage(yarnImg)
    yarn.scale = 0.2
    yarn.lifetime = 20
  }
}
function spawnCheese()
{
  if(frameCount % 80 === 0){
    x1 = Math.round(random(1,800))
    y1 = Math.round(random(1,500))
    cheese = createSprite(x1,y1,30,30)
    cheese.addImage(cheeseImg)
    cheese.scale = 0.2
    cheese.lifetime = 25
  }
}