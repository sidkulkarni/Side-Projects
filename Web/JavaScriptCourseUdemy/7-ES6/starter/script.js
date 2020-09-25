//ES6 Modern JavaScript features:


//Lecture: let and const

/*
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
//const : values that we don't have to change i.e variables that are immutable (non-changeable) that we don't have to change!
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

//variables declared in var in ES5 ore before are function scoped.
//variables declared with let and and const in ES6 are block scoped.
*/
//
////ES5
//function driversLicense5(passedTest) {
//    if (passedTest) {
//        var firstName = 'John';
//        var yearOfBirth = 1990;
//        
//    }
//    console.log(firstName
//                    + 'born in '+ yearOfBirth + 'is now allowed to drive a car.');
//}
//
//driversLicense5(true);
//
////ES6
//function driversLicense6(passedTest) {
//    let firstName;
//    const yearOfBirth = 1990;
//    
//    if (passedTest) {
//        firstName = 'John';        
//    }
//    console.log(firstName
//                    + 'born in '+ yearOfBirth + 'is now allowed to drive a car.');
//}
//
//driversLicense6(true);
//
////Difference between block scope and function scope:
//
////ES6:
//let i = 23;
//for (let i = 0; i < 5; i++) {
//    console.log(i);
//}
//console.log(i); //will print out 23 as let is block scoped
//
////ES5:
//var i = 23;
//for (var i = 0; i < 5; i++) {
//    console.log(i);
//}
//console.log(i);//will print out 5 as var is not block scoped and i value gets overwritten!

//Note: Best Practice: if you want to use ESS6: use let, const
//If you want to use ES5: use var



/////////////////////////////////////////////////////////
//Lecture: Blocks and IIFEs in ES6
//
////block example: IIFE in ES6
//{
// const a = 1;
// let b = 2;
// var c = 3;
//}
////console.log(a + b); //Referece Error: a is not defined 
////console.log(c); // 3 this is because var is function scoped and not block scoped!
//
////ES5: IIFE i.e immediately invoked function expression
//(function(){
//    var c = 3;
//})();

//console.log(c); //Reference Error: c is not defined




////////////////////////////////////////////////////////
//Lecture: Strings:

//
//let firstName = 'John';
//let lastName = 'Smith';
//const yearOfBirth = 1990;
//
//function calcAge(year) {
//    return 2016 - year;
//}
//
//
////ES5
//console.log('This is '+ firstName + ''+lastName + '. He was born in '+ yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old');
//
//
////ES6: template literals
//console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);
//
//const n = `${firstName} ${lastName}`;
//console.log(n.startsWith('J')); //true
//console.log(n.endsWith('th')); //true
//console.log(n.includes('oh')); //true
//



//////////////////////////////////////////////////////
///Lecture: Arrow functions: Basics
//
//const years = [1990, 1965, 1982, 1937];
//
////ES5
//var ages5 = years.map(function(el) {
//    return 2016 - el;
//});
////console.log(ages5); // [26, 51, 34, 79]
//
////ES6
//let ages6 = years.map(el => 2016 - el);
////console.log(ages6);
//
//ages6 = years.map((el,index) => `Age element ${index + 1}: ${2016 - el}.`);
////console.log(ages6);
//
//ages6 = years.map((el, index) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age element ${index + 1}: ${age}.` 
//});
//console.log(ages6);

////////////////////////////////////////////////////////////////////
//Arrow Functions Advanced: Arrow Functions 2

/*
Note: Unlike regular functions, Arrow functions don't have their own this keyword. They simply use the this keyword of the function that they are written in i.e they have a lexical this keyword.
*/


//ES5
//var box5 = {
//    color: 'green',
//    position: 1,
//    clickMe: function () {
//        var self = this; //this is a hack to get the value of the this variable.
//        document.querySelector('.green').addEventListener('click', function() {
//            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//            alert(str);
//        });
//    }
//}
//box5.clickMe();

//ES6
//var box6 = {
//    color: 'green',
//    position: 1,
//    clickMe: function () {
//        document.querySelector('.green').addEventListener('click', ()=>{
//            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//            alert(str);
//        });
//    }
//}
//box6.clickMe();
//
////Note: Best to use arrow functions when we want to preserve the value of the this keyword.


//Function constructor: just like a class:


//ES6
//function Person(name) {
//    this.name = name;
//}
//
//var friends = ['Bob', 'Jane', 'Mark'];
//
//Person.prototype.myFriends6 = function(friends) {
//    var arr = friends.map(el => `${this.name} is friends with ${el}`);
//    console.log(arr);
//}
//
//new Person('Mike').myFriends6(friends);
//
//


/////////////////////////////////////////////////////////////////
//////Lecture: Destructuring

//Destructuring gives us a very convenient way for us to extract data from a data structure like an object or an array.
//
////ES5
//var john = ['John', 26];
////var name = john[0];
////var age = john[1];
//
////ES6
//const [name,age] = ['John', 26];
//console.log(name);
//console.log(age);
//
//const obj = {
//    firstName:'John',
//    lastName:'Smith'
//}
//
//const {firstName, lastName} = obj;
//console.log(firstName);
//console.log(lastName);
//
//
//const {firstName: a, lastName: b} = obj;
//console.log(a);
//console.log(b);
//
//
//
//function calcAgeRetirement(year) {
//    const age = new Date().getFullYear() - year;
//    return [age, 65 - age];
//}
//
//const [age2, retirement] = calcAgeRetirement(1990);
//console.log(age2);
//console.log(retirement);
//



/////////////////////////////////////////////////////////////////
///////Lecture: Arrays

//
//const boxes = document.querySelectorAll('.box');
////
////ES5
//
//var boxesArr5 = Array.prototype.slice.call(boxes);
//boxesArr5.forEach(function(cur) {
//    cur.style.backgroundColor = 'dodgerblue';
//});
//
//
////ES6
//
//const boxesArr6 = Array.from(boxes);
//Array.from(boxes).forEach(cur => 
//  cur.style.backgroundColor = 'dodgerblue');
//
////ES5
///*
//for (var i = 0; i < boxesArr5.length; i++) {
//    if (boxesArr5[i].className === 'box blue') {
//        continue;
//    }
//    boxesArr5[i].textContent = 'I changed to blue!';
//}
//*/
//
////ES6
//for (const cur of boxesArr6) {
//    if (cur.className === 'box blue') {
//        continue;
//    }
//    cur.textContent = 'I changed to blue!';
//}
//
//
////ES5
//var ages = [12,17,8,21,14,11];
//
//var full = ages.map (function(cur) {
//    return cur >= 18;             
//});
//console.log(full);
//
//console.log(full.indexOf(true));
//console.log(ages[full.indexOf(true)]);
//
//
////ES6
//console.log(ages.findIndex(cur => cur >= 18));
//console.log(ages.find(cur => cur >= 18));

/////////////////////////////////////////////////////////////////
//////Lecture: The Spread Operator

/*

function addFourAges (a,b,c,d) {
    return a + b + c + d;
}
var sum1 = addFourAges(18,30,12,21);
console.log(sum1);


//ES5
var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null,ages);
console.log(sum2);


//ES6

Spread operator: takes an array and transforms them into a bunch of single values.

const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMiller];

console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];
Array.from(all).forEach(cur=> cur.style.color = 'purple');
*/


//////////////////////////////////////
/////Rest Parameters:


//Rest Parameters: receive a couple of single values and transform them into arrays when we call a function with multiple parameters.


//ES5
//function isFullAge5() {
//    console.log(arguments);
//    //converts into an array.
//    var argsArr = Array.prototype.slice.call(arguments);
//    
//    argsArr.forEach(function(cur) {
//       console.log( (2016 - cur) >= 18 );
//    });
//}
//
////isFullAge5(1990,1999,1996);
////isFullAge5(1990,1999,1965,2016,1987);
//
//
////ES6
//function isFullAge6(...years){
//    //console.log(years);
//    years.forEach(cur => console.log( (2016 - cur) >= 18));
//}
//isFullAge6(1990,1999,1996);



////////////////////////////////////////
//////Default Parameters:

/*
//ES5
function SmithPerson(firstName, yearOfBirth, lastName,nationality) {
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    
    nationality === undefined ? nationality = 'american' : nationality = nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');




//ES6:
function SmithPerson (firstName, yearOfBirth, lastNAME = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');
*/


/////////////////////////////////////////////Lecture: Maps or Hashmaps

//Map: Key Value data structure in ES6

/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');

question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct anser!');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
    question.delete(4);
}

//question.clear(4);
//question.forEach((value, key) => 
//                console.log(`This is ${key}, and its set to ${value}`));


for (let [key,value] of question.entries()) {
    console.log(`This is ${key}, and its set to ${value}`);
}
*/

////////////////////////////////////////////Lecture: Classes

//In ES5 classes are called as function constructors. In ES6, they are called as classes.
/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

//ES6 classes
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6 ('John', 1990, 'teacher');

*/


//////////////////////////////////////////////Classes with Subclasses:


//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}


var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGame = olympicGames;
  this.medals = medals;
}


Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}


var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();


//ES6 classes
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting() {
        console.log('Hey there!');
    }
}

//subclass extends the superclass
class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name,yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal () {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);