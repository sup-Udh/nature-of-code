let walker;

function setup() {
    createCanvas(640,240);
    walker = new Walker();
    background(255);
}

function draw() {
    walker.step();
    walker.show();
}

class Walker {
    // ivhects have a constructor where they are init.
    constructor(){
        // providing x and y axis points

        this.x = width / 2;
        this.y = height /2; // directly attach to theproperties itself 

    }
    show() {
        stroke(0);
        point(this.x, this.y);
    }

    // step method to move the walker randomly
    step() {
        let r = random(1);
        if (r < 0.5) {
            // moving towards the mouse

            let dx = mouseX = this.x; // left and right
            let dy = mouseY=this.y; // up anc down

            if (abs(dx) > abs(dy)){
                if (dx > 0) { 
                    this.x++ 
                }else {
                    this.x--;
                }

            }else {
                if (dy > 0) {
                    this.y++;
                }else {
                    this.y--;
                }
            }
        }
        // random movement
        else {
            // random movement

             const choice = floor(random(4));

      if (choice === 0) {
        this.x++;         // right
      }
      else if (choice === 1) {
        this.x--;         // left
      }
      else if (choice === 2) {
        this.y++;         // down
      }
      else {
        this.y--;         // up
      }
            
        }
    }
    
}