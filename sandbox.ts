let character = "atharv";
let age = 20;
let isWorking = true;

// Note in TS we can assign different values to the variable but we can't change their types

// character = 20 will give error
character = "tanay"

// age = "tanay" give error;
age = 21;

// isWorking = 21 error;
isWorking = false;

const circle = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circle(10));