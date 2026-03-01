/** @format */

class ArrayOfNumbers {
	constructor(public collection: number[]) {}
	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfString {
	constructor(public collection: string[]) {}
	get(index: number): string {
		return this.collection[index];
	}
}

class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}

var x = new ArrayOfAnything<string>(["a", "V", "d"]);

// Example of generics with function
function printStrings(arr: string[]) {
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		console.log(element);
	}
}

function printNumber(arr: number[]) {
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		console.log(element);
	}
}


function printAnything<T>(arr: T[]): void {
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		console.log(element);
	}
}

printAnything<string>(['a','b','c']);
