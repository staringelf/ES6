// //Before ES6

// function Vehicle (color, wheels, horn) {
//     this.color = color || 'black';
//     this.wheels = wheels || 4;
//     this.horn = horn || 'beep beep!';
// }

// Vehicle.prototype.honkHorn = function () {
//     console.log(this.horn);
// }

// function Bicycle (color, wheels, horn){
//     wheels = wheels || 2;
//     horn = horn || 'honk honk!';
//     Vehicle.call(this, color, wheels, horn);
// }

// Bicycle.prototype = Object.create(Vehicle.prototype);
// Bicycle.prototype.constructor = Bicycle;

// const myVehicle = new Vehicle();
// myVehicle.honkHorn();
// const myBike = new Bicycle();
// myBike.honkHorn();

// //Only with default function parameters

// function Vehicle2 (color = 'black', wheels = 4, horn = 'beep beep!') {
//     this.color = color;
//     this.wheels = wheels;
//     this.horn = horn;
// }

// Vehicle2.prototype.honkHorn = function () {
//     console.log(this.horn);
// }

// function Bicycle2 (color, wheels = 2, horn = 'honk honk!'){
//     Vehicle2.call(this, color, wheels, horn);
// }

// Bicycle2.prototype = Object.create(Vehicle2.prototype);
// Bicycle2.prototype.constructor = Bicycle2;

// const myVehicle2 = new Vehicle2();
// myVehicle2.honkHorn();
// const myBike2 = new Bicycle2();
// myBike2.honkHorn();

//ES6

class Vehicle {
    constructor (color = 'black', wheels = 4, horn = 'beep beep!') {
        this.color = color;
        this.wheels = wheels;
        this.horn = horn;
        this.age = 0;
    }

    honkHorn() {
        console.log(this.horn);
    }
}

class Bicycle extends Vehicle {
    constructor (color, wheels = 2, horn = 'honk honk!'){
       super(color, wheels, horn);
    }

    honkHorn () {
        super.honkHorn() ;
        console.log('Get aside!');
    }
}


const myVehicle = new Vehicle();
myVehicle.honkHorn();
const myBike = new Bicycle();
myBike.honkHorn();
