
const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,object;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
  var object_static = {
  isStatic:true
  }
  object=Bodies.rectangle(200,10,50,100,object_static);
  World.add(world,object);
  console.log(object);
  console.log (object.position.x);
  console.log (object.position.y);
}

function draw() {

  background(1,200,500); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  
  drawSprites();








}