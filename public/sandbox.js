"use strict";
// Function signatures
// example 1
let greet; /*greet will return void*/
greet = (name, greetings) => {
    console.log(`${name} says ${greetings}`);
};
// Example 2
let calc; /*calc will return number*/
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// objects
let logDetails; /*logDetails will return void*/
logDetails = (spiderMan) => {
    console.log(`${spiderMan.name} is ${spiderMan.age} years old`);
};
