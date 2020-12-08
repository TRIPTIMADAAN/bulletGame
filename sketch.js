var bullet ,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(800,400);
  speed=random(55,90)
  weight =random(400,700);
  thickness = random(22,83);
  
  bullet = createSprite(50, 200, 50, 50);
 bullet.velocityX=speed
  wall = createSprite(700,200,60,height/2);
  wall.shapeColor=color(80,80,80)
  
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge){
  return true
}
else{return false}

}