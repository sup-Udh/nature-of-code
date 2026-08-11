let vehicle;


function setup() {
    createCanvas(640,240)
    vehicle = new Vehicle(width /2 , height/2);
}

function draw() {
    backround(255)

    let mouse = createVector(mousex, mouseY);

    // drawing an circle around the mouse
    fill(127)
    stroke(0)
    strokeWeight(2)
    circle(mouse.x, mouse.y, 48)


    /// steering function calls

    vehicle.seek(mouse);
    vehicle.update();
    vehicle.show();
}