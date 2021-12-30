class Invoice {
    // readonly client: string; /* Read-only members can be accessed outside the class, but their value cannot be changed. Since read-only members cannot be changed outside the class, they either need to be initialized at declaration or initialized inside the class constructor. */

    // private details: string; /* private access modifier ensures that class members are visible only to that class and are not accessible outside the containing class */

    // public amount: number; /* by default, all members of a class in TypeScript are public. All the public members can be accessed anywhere without any restrictions. */

    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // } 
    
    /* alternative for modifiers to be used inside the constructor*/

    constructor(
        /* note: it's not gonna assign our variables if we remove modifiers inside the constructor */
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
// creating a new object based on the instance of the object of class Invoice
const invOne = new Invoice('mario', 'work on the mario website', 200);
const invTwo = new Invoice('luigi', 'work on the luigi website', 600);
// console.log(invOne, invOne)
 /* what if in the future we want to add only the object that has Invoice type inside an array */
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
}) 
