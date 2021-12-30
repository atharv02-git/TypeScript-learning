// Interface
interface IsSpiderman {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsSpiderman = {
    name: 'Andrew',
    age: 20,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};

/* also we can pass argument inside any function but that argument should be of the type we declared as interface */
const greetSpiderman = (spiderman: IsSpiderman) => {
    console.log('hello ', spiderman.name)
}

greetSpiderman(me);
console.log(me);

