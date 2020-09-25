//console.log('Hello from Node.js...');

//const person = require('./person');
//console.log(person);

//common js
//const Person = require('./person');

//we can do this in ReactJS, ES6 but we can't do this in NodeJS because node hasn't implemented this yet.
//If we want to use this syntax, for now I'll atually have to implement Babel to compile to ES6.
//ES6 method.
//import Person from './person'; 


// const person1 = new Person('John Doe',30);

// person1.greeting(); 

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener',data));

logger.log('Hello World!');
logger.log('Hi');
logger.log('Hello');


const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        //Call event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

//module.exports = Logger;