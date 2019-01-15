const kennel = {
	name: "Nashville North Kennels",
	address: "100 Demonbreun Road",
	manager: "Harper Frankstone",
	capacity: 50,
	currentAnimals: ["Jet", "Snickers", "Blue", "Jacks", "Flap", "Barnum"]
}

//  display the animals
//  const animals = kennel.currentAnimals;
//  for (let i = 0; i < animals.length; i++) {
//      const element = animals[i];
//      console.log(element);
//  }

// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.

// Lightning Exercise 2: Output only Andy and Zoe in the console.

const nashvilleSoftwareSchool = {
	founded: 2012,
	director: "John Wark",
	instructors: {
		fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
		partTime: ["Zoe", "Nathan"]
	},
	address: "500 Interstate Blvd. S"
}

// const partTeach = nashvilleSoftwareSchool.instructors.partTime;
// const fullTeach = nashvilleSoftwareSchool.instructors.fullTime;

// for (let i = 0; i < partTeach.length; i++) {
//     const element = partTeach[i];
//     console.log(element);
// }

// for (let i = 0; i < fullTeach.length; i++) {
//     const element = fullTeach[i];
//     console.log(element);
// }

// console.log(partTeach[0]);
// console.log(fullTeach[4]);

// const teachers = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         console.log(array.join(", "));
//     }
// }

// teachers(nashvilleSoftwareSchool.instructors.partTime);
// teachers(nashvilleSoftwareSchool.instructors.fullTime);
// console.log(nashvilleSoftwareSchool.instructors.partTime[0], nashvilleSoftwareSchool.instructors.fullTime[4])
// // OR
// console.log(nashvilleSoftwareSchool["instructors"]["partTime"][0], nashvilleSoftwareSchool["instructors"].fullTime[4])

// 1. Design a function named `evenOrOdd` that take a single number as an argument.
// 2. It should return the string "Even" if the number is evenly divisible by two.
// 3. It should return the string "Odd" if the number is not evenly divisible by two.

// Use the modulo - or remainder - operator in JavaScript to accomplish this.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

const evenOrOdd = (num) => {
	if (num % 2 === 0) {
		return "even";
	} else {
		return "odd";
	}
}

// 1. Create an array of numbers. Some even, some odd.
// 2. Iterate the array and invoke the `evenOrOdd` passing the current number as the argument.
// 3. Use `console.log` to display the result in the Developer Console.

const numbers = [17, 08, 1980, 2367];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const whichOne = evenOrOdd(element);
//     console.log(whichOne);
// }

numbers.forEach(currentNumber => {
	const whichOne = evenOrOdd(currentNumber);
	console.log(whichOne);
})