const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
 
  //border1 = Bodies.rectangle(305,685,10,480)
  var ground_options ={
    isStatic: true
     }
  ground1 = Bodies.rectangle(298,720,590,15,ground_options)
  World.add(world,ground1);
  ground2 = Bodies.rectangle(7,630,10,1280,ground_options)
  World.add(world,ground2);
  ground3 = Bodies.rectangle(475,35,10,1380,ground_options)
  World.add(world,ground3);
  ground4 = Bodies.rectangle(355,6,700,10,ground_options)
  World.add(world,ground4);

//mground means main ground in the game.
  mground = new Ground(190,705,590,15)

  //division1 = new Division()

  for(var k =0; k <=width; k = k +80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  for (var j = 40; j <=width; j=j +50){
    plinkos.push(new Plinko(j,75));
  }
  
  for (var j = 15; j <=width-10; j=j +50){
    plinkos.push(new Plinko(j,175));
  }
  
  
  
}

var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight = 300;

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  rectMode(CENTER);
  fill ("brown")
  rect(ground1.position.x,ground1.position.y,600,10)
  fill("brown")
  rect(ground2.position.x,ground2.position.y,10,1280)
  fill ("brown")
  rect(ground3.position.x,ground3.position.y,10,1380)
  fill ("brown")
  rect(ground4.position.x,ground4.position.y,700,10)

  //ground2.display();
  //ground3.display();
 // ground4.display();
  mground.display();











}//draw one curly