// arrays
let names = ['tobey', 'tom', 'andrew']
// we can't push anything inside array of type string, if we want to push then it should be of a same type(string)
names.push('robert')
// names.push(2)
// names[0] = 20
names[0] = 'bob'
// also most important point we can change the type of variable
// names = 'bob' if the variable is array type then it should be array


let numbers = [20, 18, 17]
// we can't push anything inside array of type number, if we want to push then it should be of a same type(number)
numbers.push(2)
// numbers.push('robert')
numbers[0] = 20
// numbers[0] = 'bob'

// if the array is mixed array then we can push integer of any type inside array
let mixed = [10, 'andrew', 17, 18, 'tom', false]
mixed.push('robert')
mixed[2] = 'tobey'
mixed[5] = 20
mixed[1] = true


// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']

ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: ['running'],
};

// add key value pair inside object dynamically
interface AddInsideObject {
    [key: string]: any
}

// var obj: AddInsideObject = {}; 
// or to make it compact
var obj: {[k: string]: any} = {};
obj.prop = "value";
obj.prop2 = 40;
console.log(obj)