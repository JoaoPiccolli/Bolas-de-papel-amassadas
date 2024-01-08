var engine,
    world,
    ground,
    ball,
    leftSide,
    rightSide;

function setup() {
  createCanvas(800, 600);
  engine = Matter.Engine.create();
  world = engine.world;

  
    var ball_options = {
    isStatic: false,
    restitution: 0.3,
    friction: 0,
    density: 1.2
  };

  var ground = new Ground(); 
  var leftSide = new Ground(-10, 300, 20, 600); 
  var rightSide = new Ground(810, 300, 20, 600); 

  ball = Matter.Bodies.circle(400, 100, 20, ball_options);
  Matter.World.add(world, [ball, ground.body, leftSide.body, rightSide.body]);
}

function draw() {
  background(220);
  Engine.update(engine);

  ground.display();
  leftSide.display();
  rightSide.display();

  fill(255);
  ellipse(ball.position.x, ball.position.y, 40);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball, { x: ball.position.x, y: ball.position.y }, { x: 0, y: -0.05 });
  }
}



