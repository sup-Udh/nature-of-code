let particle;

function setup() {
  createCanvas(640, 360);
  particle = new Particle(width / 2, 20);
}

function draw() {
  background(255);
  // Operate the single particle.
  particle.update();
  particle.show();
  // Apply a gravity force.
  let gravity = createVector(0, 0.1);
  particle.applyForce(gravity);
  // Check the particle’s state and make a new particle.
  if (particle.isDead()) {
    particle = new Particle(width / 2, 20);
    console.log("Particle dead!");
  }
}

class Particle {
  constructor(x,y) {
    this.position =  createVector(x, y);
    //{!1} For demonstration purposes, the particle has a random velocity.
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

  // Keep the same physics model as in previous chapters.
  applyForce(force) {
    this.acceleration.add(force);
  }

  // Is the particle alive or dead?
  isDead() {
    return (this.lifespan < 0.0);
  }
}