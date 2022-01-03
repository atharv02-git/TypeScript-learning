import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
// deciding the type of the document
let docOne;
let docTwo;
docOne = new Invoice('Atharv', 'project building', 200);
docTwo = new Payment('Andrew', 'plumbing', 180);
// also we can decide the type of array
let docArr = [];
docArr.push(docOne, docTwo);
console.log(docArr);
