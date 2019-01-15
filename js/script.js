// `The car is moving forward, at 25 mph.`

// function go (direction, speed) {
//     let carSpeed = "The car is moving "+direction+", at "+speed+" mph.";
//     console.log(carSpeed);
// }

// const go = (direction, speed) => {
//     console.log(`The car is moving ${direction}, at ${speed} mph.`);
// }


// Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!

// Example:

// The car is moving forward at 82 mph
// SLOW DOWN!

const go = (direction, speed) => {
    console.log(`The car is moving ${direction}, at ${speed} mph.`);
    if (speed > 75) {
        console.log("SLOW DOWN!");
    }
}
    
//go("backward", 10);
//go("forward", 80);

// const foods = ["pizza", "spaghetti", "burger", "hotdog", "corn dog", "taco"]

// for (let index = 0; index < foods.length; index++) {
//     const element = foods[index];
//     if (element == "hotdog") { 
//         console.log(element);
//     } else {
//         console.log(`not hotdog`);
//     }
// }

// for each element in the array if it's a "hotdog" print hotdog and if it's not print "not hotdog" to the console!

// Loop over every item in this array:
// [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"]
// Return a new array that contains only strings. Log out the result.
// Hint: The typeof operator

// const stuff = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"];

// const stringStuff = [];

// for (let i = 0; i < stuff.length; i++) {
//     const element = stuff[i];
//     let eleType = typeof element;
//     if (eleType === "string") {
//         stringStuff.push(element);
//     }
// }

// console.log(stringStuff);

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(wardrobe.height);
// console.log(wardrobe.manufacturer);
// console.log(wardrobe.contents);
// console.log(wardrobe.depth);
// console.log(wardrobe.width);

// const closetKeys = Object.keys(wardrobe);
// console.log(closetKeys);
// for (let i = 0; i < closetKeys.length; i++) {
//     const element = closetKeys[i];
//     console.log(element);
//     let listing = wardrobe[element];
//     console.log(listing);
// }

// wardrobe.material = "cedar";

// console.table(wardrobe);
// console.table(wardrobe.contents);

//Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.

const Betsy = {
    age: 65,
    height: "5ft 4in",
    eyes: "blue",
    hair: "blonde",
    relation: "mom",
    bioparent: true
}

const Larry = {
    age: 67,
    height: "6ft 1in",
    eyes: "grey",
    hair: "grey",
    relation: "dad",
    bioparent: false
}

const Ed = {
    age: 65,
    height: "5ft 6in",
    eyes: "green",
    hair: "brunette",
    relation: "dad",
    bioparent: true
}

const Chrissy = {
    age: 35,
    height: "5ft 4in",
    eyes: "blue",
    hair: "mahogany",
    relation: "sister",
    bioparent: false
}

const Marjorie = {
    age: 69,
    height: "5ft 0in",
    eyes: "blue?",
    hair: "gray",
    relation: "mom",
    bioparent: false
}

const familyMembers = [Betsy, Larry, Ed, Chrissy, Marjorie];

console.log(familyMembers);

for (let i = 0; i < familyMembers.length; i++) {
    const element = familyMembers[i];   
    console.table(element);
}