const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine
var world;
var cannonbody;
var cannonbarrel;
var cannonshooter;
var ground;
var cannonBall;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    cannonbody = new Box(50,200, 50 ,50, 255, 0, 0);
    cannonbarrel = new Box(70,100, 150 ,15, 0, 255, 0);
    cannonshooter = new Box(100, 200, 20, 50, 0, 0, 255);
    ground = new Ground(width / 2, height, width, 20);
    cannonBall=new Box(100,200,5,5,100,20,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    cannonbody.display();
    cannonshooter.display();
    cannonbarrel.display();
   if(keyCode===32){
cannonBall.display();
cannonBall.velocityX("5");
   }
}
function createBullet(x) {
    var bullet= createSprite(100, 100, 5, 10);
    bullet.y = 360;
    bullet.x = x;                                           
    bullet.shapeColor = "red";
    bullet.velocityX = 5;
    bullet.lifetime = 1000;
  }
