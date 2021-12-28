var character = "atharv";
var age = 20;
var isWorking = true;
// Note in TS we can assign different values to the variable but we can't change their types
// character = 20 will give error
character = "tanay";
// age = "tanay" give error;
age = 21;
// isWorking = 21 error;
isWorking = false;
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(10));
