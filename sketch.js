
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
    
    Block1 = Bodies.rectangle(100,200,150,10,Block1_options);
	World.add(world,Block1);
	rect(CENTER)

	Block2 = Bodies.rectangle(300,200,150,10,Block2_options);
	World.add(world,Block2);
    rect(CENTER)

	Plane = Bodies.rectangle(200,300,400,20,Plane_options);
	World.add(world,Plane);

	rotator1 = Bodies.rectangle(250,200,150,20,rotator1_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(250,200,150,20,rotator2_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(250,200,150,20,rotator3_options);
	World.add(world,rotator3);
    

var particle_options = {
	restitution:0.4,
	friction:0.02
}	


    particle1 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle1);

	particle2 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle2);

	particle3 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle3);

	particle4 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle4);

	particle5 = Bodies.circle(220,10,10,particle_options);
	World.add(world,particle5);

	var plane_options={
		isStatic: true
    }

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(green);

  Engine.update(engine);

	Matter.Body.rotate(rotator1,angle1);
	push();
	translate(rotator1.position.x,rotator.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1 +=0.2;

	Matter.Body.rotate(rotator2,angle2);
	push();
	translate(rotator2.position.x,rotator.position.y);
	rotate(angle2);
	rect(0,0,150,20);
	pop();
	angle2 +=0.2;

	Matter.Body.rotate(rotator3,angle3);
	push();
	translate(rotator3.position.x,rotator.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle3 +=0.2;

    ellipse(particle1.position.x,particle1.position.y,20);
    
	ellipse(particle2.position.x,particle2.position.y,20);

	ellipse(particle3.position.x,particle3.position.y,20);

	ellipse(particle4.position.x,particle4.position.y,20);

	ellipse(particle5.position.x,particle5.position.y,20);

  drawSprites();
 
}



