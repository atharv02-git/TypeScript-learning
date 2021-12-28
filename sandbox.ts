// Explicit types
let character: string = "andrew";
let age: number;
let isLoggedIn: boolean;

// age="tobey"
age = 30

// isLoggedIn = 25;
isLoggedIn = true;

// Arrays
let spiderMans: string[] = [];

spiderMans.push("andrew");
spiderMans.push("Tobey");
spiderMans.push("Tom");
console.log("Spiderman array is:", spiderMans);

// Union Types
let mixed: (string | number | boolean)[] = []
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log("Mixed array is: ", mixed);

let uid: string | number;
// here, no paranthesis req as there is no array [] at the end

// Objects
let spiderManOne: object;
spiderManOne = { name: "Tom", age: 24 }
console.log("Spiderman 1 object is: ", spiderManOne);

let spiderManTwo: {
    name: string,
    age: number,
    suitColor: string
}
spiderManTwo = { name: "Tobey", age: 38, suitColor: "red-black" }
console.log("spidermanTwo object is: ", spiderManTwo);