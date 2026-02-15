/** @format */

// Classes : Blueprint to create a object with some fields(values) and method(functions) to represent a 'thing'

// class Vehicle {
//     color: string

//     constructor(color: string) {
//         this.color = color;
//      }

// 	public honk(): void {
// 		console.log("BeepBeep");
//     }

//     protected start(): void {
// 		console.log("Start");

//     }
// }

// Shortcut to initialize variable
class Vehicle {
	constructor(public color: string) {}

	public honk(): void {
		console.log("BeepBeep");
	}

	protected start(): void {
		console.log("Start");
	}
}

// Baisc inheritence
class Car extends Vehicle {
	constructor(public wheels: string, color: string) {
        super(color);
    }

	private drive(): void {
		console.log("Car Bruhm bruhm");
	}

	protected start(): void {
		console.log("Start Car");
	}

	public startDrivingProcess(): void {
		this.drive();
	}
}

const vehicle = new Vehicle("red");
vehicle.honk();
const car = new Car("2","orange");
car.startDrivingProcess();
car.honk();

console.log(car.color);
;

// Method Modifier
// public => The method can be called any where, any time
// private => This method can only be called by other methods in this class
// protected => This method can be called by other methods in this class, or by other methods in child classes
