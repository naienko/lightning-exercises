// 1. Create a function that logs the result of adding two numbers that were passed in as arguments.
// 2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
// 3. Invoke each function a couple times with different argument values.

// const addingMachine = (first, second) => {
//     let result = "";
//     result += first + second;
//     console.log(result);
// }

// this is the one line version
const addingMachine = (first, second) => console.log(first + second);

// addingMachine(5,10);

// const subtractMachine = (first, second) => {
//     let result = "";
//     result += first - second;
//     console.log(result);
// }

const subtractMachine = (first, second) => console.log(first - second);

// subtractMachine(14,20);

// Create another function called` calculate` that takes three arguments: two numbers and a function

const calculate = (first, second, machine) => machine(first, second);

calculate(20,10,addingMachine)