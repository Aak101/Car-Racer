var bg, road, player, obstacle, CAR;

function preload(){
road = loadImage("background.png")
obstacle = loadImage("spike.png")
player = loadImage("car without background.png")
}

function setup() {
createCanvas(250,600)
 bg = createSprite(135,300)
 bg.scale = 4
 bg.addImage("bgroad",road)
 bg.velocityY = 4



 car = createSprite(150,500);
 car.scale = 0.2    
 car.addImage("CAR", player );
 
}

function draw() {
car.x = mouseX
if (bg.y > 500){

    bg.y = 300
}

 drawSprites();
}