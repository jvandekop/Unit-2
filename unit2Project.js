const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {
    alert('Button clicked!');
});

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isOn = false; 
    }

    start() {
        if (!this.isOn) {
            this.isOn = true;
            console.log(`The ${this.make} ${this.model} (${this.year}) has been started.`);
        } else {
            console.log(`The ${this.make} ${this.model} (${this.year}) is already running.`);
        }
    }

    stop() {
        if (this.isOn) {
            this.isOn = false;
            console.log(`The ${this.make} ${this.model} (${this.year}) has been stopped.`);
        } else {
            console.log(`The ${this.make} ${this.model} (${this.year}) is already stopped.`);
        }
    }
}


const myCar = new Car('Toyota', 'Camry', 2020);
myCar.start();