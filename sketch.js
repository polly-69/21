const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
var ball;
let world;
var btn1;
var btn2;

var ground;
var left;
var right;
var top_wall;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  btn1 = createImg('right.png');
  btn1.position(300,30);
  btn1.size(50,50);
  btn1.mouseClicked(horizontalForce);
  
  btn2 = createImg('up.png');
  btn2.position(30,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

var ball_options={
  restitution:0.8
}


  
ball=Bodies.circle(200,200,20,ball_options);
World.add(world,ball);

}

function draw() 
{
  background(51);

ellipse(ball.position.x,ball.position.y,20)

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function horizontalForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
