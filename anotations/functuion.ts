/** @format */

// Function
// Annotation (i: number) => void  (What is parameter and what is return type)
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

// Simplified version of above
const logNumber2 = (i: number): void => {
	console.log(i);
};

// Simplified version of above another example
// Write these line like this (a: number, b: number): number
const add = (a: number, b: number): number => {
	return a + b;
};

// const subtract: (a: any, b: any) => void; as there is no return type it picked void as return type
const subtract = (a: number, b: number) => {
	a - b;
};

// const subtract2: (a: number, b: number) => number; as there is return type inference picked number as return type
const subtract2 = (a: number, b: number) => {
	return a - b;
};
// const subtract3: (a: number, b: number) => number;
const subtract3 = (a: number, b: number): number => {
	// This will throw error if return is removed as we explisit mention the type (a: number, b: number): number
	return a - b;
};

function divide(a: number, b: number): number {
	// This will throw error if return is removed as we explisit mention the type (a: number, b: number): number
	return a * b;
}

const multiply = function (a: number, b: number): number {
	// This will throw error if return is removed as we explisit mention the type (a: number, b: number): number
	return a * b;
};

const logger = (message: string): void => {
	console.log(message);
	return undefined;
};

const throwError = (message: string): never => {
	throw Error("All is well");
};


const forcast = {
    date: new Date(),
    'weather': 'sunny'
};

const logWeather = (forcast: { date: Date, weather: string }) => { 
    console.log(forcast.date);
    console.log(forcast.weather);
    
}

// Simplified
const logWeather2 = ({ date, weather}: { date: Date; weather: string }) => {
	console.log(date);
	console.log(weather);
};

console.log(forcast);

