//Module Wrapper Function: everything gets wrapped around by this
// (function (exports, require, module, __filename, __dirname) {

// })
//console.log(__dirname, __filename);


// const person = {
//   name: 'John Doe',
//   age: 30 
// };

//if i want to use this person object somewhere else:
//module.exports = person; 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}
//I want to export the whole class.
module.exports = Person;


