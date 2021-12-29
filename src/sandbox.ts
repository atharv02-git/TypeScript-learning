let greet: Function;

// greet = hello;
greet = () => {
    console.log("Hello again!")
}
greet();

const add = (a: number, b: number, c?: number | string): void => {  /* where ? means non optional and void is the type of the return statement,it basically refers to the complete lack of return value */
    console.log(a + b)
    console.log(c)
}
add(4, 8, 10);

// Another Function
const minus = (a: number, b: number): number => {
    return a + b;
}

let result = minus(4,6) /* if we hover over result then its type will also be number  */