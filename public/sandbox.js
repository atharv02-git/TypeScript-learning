"use strict";
let greet;
// greet = hello;
greet = () => {
    console.log("Hello again!");
};
greet();
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(4, 8, 10);
// Another Function
const minus = (a, b) => {
    return a + b;
};
let result = minus(4, 6); /* if we hover over result then its type will also be number  */
