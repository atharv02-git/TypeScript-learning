// Function signatures

// example 1
let greet: (a: string, b: string) => void; /*greet will return void*/

greet = (name: string, greetings: string) => {
    console.log(`${name} says ${greetings}`);
}
// Example 2

let calc: (a: number, b: number, c: string) => number; /*calc will return number*/
calc = (numOne: number, numTwo: number, action: string) =>{
    if(action === 'add'){
        return numOne + numTwo;
    }else{
        return numOne - numTwo;
    }
}

// objects
let logDetails: (obj: {name: string, age: number}) => void; /*logDetails will return void*/

logDetails = (spiderMan: {name: string, age: number}) => {
    console.log(`${spiderMan.name} is ${spiderMan.age} years old`);
}