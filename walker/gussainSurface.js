function setup(){
    createCanvas(640,240);
    background(255);
}

function draw() {
    let x = randomGaussian(320,60);
    // randomGaussian() mean first then standar deviation
    // standard deviation talks about how spread out values are.
    noStroke();
    fill(0,10)
    circle(x,120,16)

}




// Exercise 0.4 — Paint splatter 🎨

// This is your first exercise after the normal distribution.

// The idea is:

// Create paint splatter where most dots cluster around a central position, but some dots splatter toward the edges.

// And then:

// Use a normal distribution for the colors too.

// Finally:

// Create a slider that controls the standard deviation.

function setup() {
    createCanvas(640, 240);
    background(255);
    noStroke();
}

function draw() {
    let x = randomGaussian(320, 60);
    let y = randomGaussian(120, 30);
    let r = randomGaussian(200, 50);
    let g = randomGaussian(100, 50);
    let b = randomGaussian(150, 50);
    
    fill(r, g, b, 100);
    circle(x, y, 16);
}
