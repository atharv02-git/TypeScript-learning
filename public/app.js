"use strict";
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
// creating a new object based on the instance of the object of class Invoice
const invOne = new Invoice('mario', 'work on the mario website', 200);
const invTwo = new Invoice('luigi', 'work on the luigi website', 600);
// console.log(invOne, invOne)
/* what if in the future we want to add only the object that has Invoice type inside an array */
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// const anchor = document.querySelector('a');
// if (anchor) {
//     console.log(anchor)
// }
// // console.log(anchor.href)
// Form
const form = document.querySelector('.new-item-form');
// console.log(form.children)
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
