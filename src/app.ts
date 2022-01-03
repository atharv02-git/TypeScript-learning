// const addUID = (obj: object) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid }
// }
// let docOne = addUID({name: 'Atharv', age: 20})
// console.log(docOne); /* here and error saying "Property 'name' does not exist on type '{ uid: number; }'.ts(2339)" will occur so generic comes into play*/

//Generics: <T> It captures what properties are passed to function and it captures the properties on it if it's an object

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid }
}
let docOne = addUID({ name: 'Atharv', age: 20 })
// let docTwo = addUID('Hello')

console.log(docOne.name);
console.log(docOne.age);
// console.log(docTwo)

// Generics with interfaces
interface Resource <T> {
    uid: number;
    resourceName: string;
    data: T
}

const docThree: Resource<object> = {
    uid: Math.floor(Math.random() * 100),
    resourceName: 'Raw Materials',
    data: {importPlace: 'India', Date: new Date()}
}

const docFour: Resource<string[]> = {
    uid: Math.floor(Math.random() * 100),
    resourceName: 'Raw Materials',
    data: ['Hello', 'World']
}

console.log('docThree: ',docThree)
console.log('docFour: ',docFour)