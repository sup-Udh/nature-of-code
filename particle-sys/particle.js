// a single particle:
let particle;


class Particle {

  constructor(x,y) {
    this.position =  createVector(x, y);
    //{!1 .offset-top} For demonstration purposes the Particle has a random velocity.
    this.velocity = createVector(random(-1, 1), random(-2, 0));
    this.acceleration = createVector(0, 0);
    this.lifespan = 255.0;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2.0;
    this.acceleration.mult(0);
  }


  show() {
    stroke(0, this.lifespan);
    fill(0, this.lifespan);
    circle(this.position.x, this.position.y, 8);
  }

  //{!3} Keeping the same physics model as with previous chapters
  applyForce(force) {
    this.acceleration.add(force);
  }

  //{!3} Is the Particle alive or dead?
  isDead() {
    return (this.lifespan < 0);
  }
}


function setup() {
    createCanvas(640, 240)
    particle = new Particle(width / 2 , 10)   
}


function draw() {
  background(255);
  // Operating the single Particle
  particle.update();
  particle.show();

  // Applying a gravity force
  let gravity = createVector(0, 0.1);
  particle.applyForce(gravity);

  // Checking the particle's state and making a new particle
  if (particle.isDead()) {
    particle = new Particle(width / 2, 20);
    console.log("Particle dead!");
  }
}