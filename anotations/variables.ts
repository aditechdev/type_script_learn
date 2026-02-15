/** @format */

import { log } from "console";

const apple: number = 5;
let hasName: string = "Abcd";

// Built in object

let now: Date = new Date();

// Array
let colors: string[] = ["reeeed", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}

let car: Car = new Car();

// Object literals
let point: { x: number; y: number } = {
	x: 20,
	y: 30,
};

// Function
// Annotation (i: number) => void  (What is parameter and what is return type)
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

// When to use annotations
// 1) Functions that returns the 'any' type
    const json = '{ "x": 10, "y": 20 }';
    // How JSON.parse work=> I always has return type of any
    /*
    'false' -> JSON.parse-> boolean
    '4' -> JSON.parse-> number
    '{"value":"4"}' -> JSON.parse-> {value: number}
    '{"value":"Alex"}' -> JSON.parse-> {value: string}
    */
    const coordinates = JSON.parse(json);
    console.log(coordinates);
    // So we can fix any typeAnnotation by adding this : { x: number; y: number }
    const coordinates2: { x: number; y: number } = JSON.parse(json);

// 2) When we declare a variable on one line and initialize it latter
let words = ['red', 'gree', 'etx'];
let foundWords;
let foundWords2: boolean;

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
// To fix two type add this : number | boolean
let numbersAboveZero : number | boolean= false;

for (let i = 0; i < numbers.length; i++) { 
    if (numbers[i] > 0) {
        numbersAboveZero = numbers[i];
    }
}







