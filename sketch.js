const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object1;
var ball;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,300,10,ground_options);
World.add(world,ground);
var ball_options={
  restitution:1.0
}
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  circle(ball.position.x,ball.position.y,20);
  drawSprites();
}