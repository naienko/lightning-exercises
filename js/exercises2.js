// Use string template literal syntax to create the sentence below from the following variables:

const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"

// Your sentence should look like this.

// "Hi. My name is Biff, and I'm 30 years old. They say that makes me a millenial. In 25 years I'll be 55! I guess that means I'll be a milleni-old then. Ha ha!"

// Output the sentence to the Developer Console (edited) 

// console.log(`"Hi. My name is ${name}, and I'm ${age} years old. They say that makes me a ${generationStereotype}. In ${timeSpan} years I'll be ${futureAge}! I guess that means I'll be a ${dadJoke} then. Ha ha!"`);

// Use dot notation to access the value of the key "meaning_of_life" in this object

let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};
// Now access it using a variable called 
let meaning = "meaning_of_life";
let meaningOfLife2 = hitchhikers_guide.random_facts.ultimate_answer[meaning];
// you passed the key name by storing it in a variable, then calling it using bracket notation

let meaningOfLife = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;
// this is pure dot notation, assuming that you know the entire data structure

console.log(meaningOfLife)