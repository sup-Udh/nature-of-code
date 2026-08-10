let particles = [];

function draw() {

    background(255);

    // Create
    particles.push(
        new Particle(width / 2, 20)
    );

    // Update + remove
    for (
        let i = particles.length - 1;
        i >= 0;
        i--
    ) {

        let particle = particles[i];

        particle.run();

        if (particle.isDead()) {
            particles.splice(i, 1);
        }
    }
}