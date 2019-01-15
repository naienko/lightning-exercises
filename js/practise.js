// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// const ChickenMonkey = () => {
//     for (let i = 1; i < 101; i++) {
//         if (i % 5 === 0 && i % 7 === 0) {
//             console.log("ChickenMonkey");
//         } else if (i % 5 === 0) {
//             console.log("Chicken");
//         } else if (i % 7 === 0) {
//             console.log("Monkey");
//         } else {
//             console.log(i);
//         }
//     }
// }

// ChickenMonkey();

// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
//     let output = `${currentNumber}: `;
//     if (currentNumber % 5 === 0) {
//         output += "Chicken";
//     }
//     if (currentNumber % 7 === 0) {
//         output += "Monkey";
//     }
//     console.log(output);
// }

// // Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

// let bandNumber = 1;

// //streamlined code - iff function has one line of code, and it's the return statement
// const takeNumber = bandName => `${bandNumber++}. ${bandName}`;

// const takeNumber1 = function (bandName) {
//     return `${bandNumber++}. ${bandName}`;
// }

// // you overthought this exercise hugely

// const scum = takeNumber("Galactic Scum");
// console.log(scum);  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs");
// console.log(under);  // This should print "2. Underdogs" in the console

// //store the return value
// let bandListing = takeNumber("Galactic Scum");

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];
// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

// The grill() function. Copy this into your JavaScript as well.

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for (let i = 0; i < uncookedFood.length; i++) {
    const element = uncookedFood[i];
    grill(element);
}
console.log(cookedFood);