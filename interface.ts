/** @format */

// Create a new type, describing the property names and value type of an object

const oldCivic = {
	name: "Civic",
	year: 2010,
	broken: true,
};

const printVehicle = (vehicle: {
	name: string;
	year: number;
	broken: boolean;
}) => {
	console.log(vehicle.broken);
	console.log(vehicle.name);
	console.log(vehicle.broken);
};

printVehicle(oldCivic);

interface Vehicle {
	name: string;
	year: number;
	broken: boolean;
	summary(): String;
}

const oldCivic2 = {
	name: "Civic",
	year: 2010,
	broken: true,
	summary(): string {
		return ` Name: ${this.name} Year: ${this.year} BROKEN: ${this.broken}`;
	},
	report(): string {
		return "BENEFIT OF INTERFERANCE";
	},
};
interface Reportable {
	report(): string;
}
const printVehicle2 = (vehicle: Vehicle) => {
    vehicle.summary();
    
};

const printReport = (report: Reportable) => { 
    report.report();
}

printVehicle2(oldCivic2);
printReport(oldCivic2);