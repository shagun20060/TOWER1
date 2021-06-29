const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraints = Matter.Constraints;



function preload(){
polygonImg=loadImage("polygon.png")
}

function setup(){
createCanvas(12000,700);

engine=Engine.create();
world=Engine.world;
Engine.run(engine);

polygon=Bodies.circle(160,384,20);
World.add(world,polygon);

ground=new ground

}

function draw(){
background("black");
drawSprites();

tevtSize(40);
text(mouseX + ";" + mouseY);

imageMode(CENTER)
image(polygonImg,polygon.position.x,polygon.position.y,50.50);
}
