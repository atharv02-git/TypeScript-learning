"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
logDetails('dsdasdas12', 'pen');
const greet = (user) => {
    console.log(`${user.name} says hello`);
    console.log(`uid is: ${user.uid}`);
};
greet({ name: 'tobey', uid: 12 });
