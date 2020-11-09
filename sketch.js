const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var box1, box2, box3, box4, box5, box6;
var ground;
var ball;
var chain;
var score;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600, 300, 200, 20);

  box1 = new Box(550, 290, 50, 50);
  box2 = new Box(600, 290, 50, 50);
  box3 = new Box(650, 290, 50, 50);
  box4 = new Box(575, 210, 50, 50);
  box5 = new Box(625, 210, 50, 50);
  box6 = new Box(600, 120, 50, 50);

  ball = new Ball(150, 200, 30);
  
  chain = new Chain(ball.body, {x: 120, y: 200});

  score = 0;
}

function draw() {
  background('lightGreen');  
  Engine.update(engine);  

  ground.display();

  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();

  ball.display();

  chain.display();

  stroke (1);
  text ('SCORE:' + score, 700, 50);
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode == 8){
    chain.attach(ball.body);
  }
}