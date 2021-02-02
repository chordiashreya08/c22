const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
var ground,world,engine,ball;

function setup() { 
   createCanvas(800,400);
   engine=Engine.create();
   world=engine.world;
   var ground_options={isStatic:true};
   ground=Bodies.rectangle(400,390,800,20,ground_options);
   World.add(world,ground);
   //createSprite(400, 200, 50, 50);
   var ball_options={restitution:1.0};
   ball=Bodies.circle(400,200,50,ball_options);
   World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
}