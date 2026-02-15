/** @format */

//Tuple:  Array like structure where each element represents some property of a record

// Object representing a 'drink'
// {
//     color -> brown
//     carbonated -> true
//     sugar -> 40
// }
// [brown, true, 40]

const drink = {
	color: "brown",
	carbonated: true,
	sugar: 40,
};


const pepsi: [string, boolean, number] = ["brown", true, 40];

// To reduce the repetation
// Type alias
type Drink = [string, boolean, number];

const sprite: Drink = ["brown", true, 40];


const carSpecs: [number, number] = [400, 500];

