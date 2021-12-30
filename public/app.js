"use strict";
const me = {
    name: 'Andrew',
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
/* also we can pass argument inside any function but that argument should be of the type we declared as interface */
const greetSpiderman = (spiderman) => {
    console.log('hello ', spiderman.name);
};
greetSpiderman(me);
console.log(me);
