/** @format */

const carMakers = ["ford", "toyota", "chevy"];
// To remove any : string[]
const carMakers2: string[] = [];

// 1-d array
const dates = [new Date(), new Date()];

// 2-d array
const carByMake = [["f150"], ["corolla"], ["camaro"]];

// 2-d array
const carByMake2: string[][] = [];

// Help with extracting value
const car = carMakers[0];
carMakers.pop();

// Prevent incompitable type error
// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// carMakers.push(1) // uncoment this to see the error

// Help with map
carMakers.map((car: string): string => {
	return car;
});


// Flexible types 
// (string | Date)[]
const importantDates: (string | Date | null | undefined)[] = [new Date(), "2301-12-45"];