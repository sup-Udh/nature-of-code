class Perceptron {

    constructor(totalInputs) {

        this.weights = [];

        this.learningConstant = 0.01;

        for (let i = 0; i < totalInputs; i++) {
            this.weights[i] = random(-1, 1);
        }
    }

    feedForward(inputs) {

        let sum = 0;

        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
        }

        return this.activate(sum);
    }

    activate(sum) {

        if (sum > 0) {
            return 1;
        } else {
            return -1;
        }
    }

    train(inputs, desired) {

        let guess = this.feedForward(inputs);

        let error = desired - guess;

        for (let i = 0; i < this.weights.length; i++) {

            this.weights[i] =
                this.weights[i]
                + error * inputs[i] * this.learningConstant;
        }
    }
}