let age: any = 25;

age = "tom"
console.log(age)
age = "hello";
console.log(age);
age = { name: "tobey" }
console.log(age)

// Arrays
let mixedArr: any[] = []
mixedArr.push('andrew')
mixedArr.push(false)
mixedArr.push(24)
console.log(mixedArr)

// Objects
let ninja: {name: any, age: any};
ninja = { name: 'Tobey', age: 38 }
console.log(ninja)

ninja = { name: 38, age: "Tobey"}
console.log(ninja)