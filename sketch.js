//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

//variables
var engine,world;
var plinkos = [];
var particles = [];
var divisions = [];
var devisionHeight = 300;
var ground;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;
  

  //ground
  ground = new Ground(width/2,height,width,20);

  //divisions
  for (let k = 0; k <= width; k = k + 80) {
    divisions.push(new Ground(k,height-devisionHeight/2,10,devisionHeight));
  }

  //plinkos
  for (let j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinkos(j,75));
  }

  for (let j = 15; j <= width-10; j = j + 50) {
    plinkos.push(new Plinkos(j,175));
  }

  for (let j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinkos(j,275));
  }

  for (let j = 15; j <= width-10; j = j + 50) {
    plinkos.push(new Plinkos(j,375));
  }

  //particles
  if (frameCount%30===0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
  });

  //Render.run(render);
  Engine.run(engine)
}

function draw() {
  Engine.update(engine);
  background('darkcyan');  

  

  //display
  ground.display();

  //particles
  if (frameCount%60===0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  //arrays display
  for (let k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (let j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  for (let p = 0; p < particles.length; p++) {
    particles[p].display();
  }
  
}