import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter'

// deciding the type of the document
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Atharv', 'project building', 200);
docTwo = new Payment('Andrew', 'plumbing', 180);

// also we can decide the type of array
let docArr: HasFormatter[] = [];
docArr.push(docOne, docTwo);
console.log(docArr)
