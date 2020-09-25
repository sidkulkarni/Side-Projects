/*
Printing out on Console:
*/

/*
console.log("Hello World!!!!I work");
*/

/*
Variables and Data Types:
*/

/*
var firstName = 'John';
console.log(firstName);

//var lastName = 'Smith';
//var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Teacher";
console.log(job);

*/

/*
Variable Mutation and Type Coercion:
*/


//Type Coercion:
/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);


var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + 'is a ' + age + 'year old' + job + 'Is he Married? '+ isMarried);


//Variable Mutation:
age  = 'twenty eight';
job = 'driver';

//Alert is a pop up window that appears and not on the console.
alert(firstName + 'is a ' + age + 'year old' + job + 'Is he Married? '+ isMarried);

//Prompt is a pop up where you enter in data.
var lastName = prompt('What is his last name?');
console.log(firstName + lastName);

*/

/*
Basic operators: 
*/

//Math operators:

/*
var year, yearJohn, yearMark;
now = 2019
yearJohn = 2018 - 28;
yearMark = year / 33;

console.log(yearJohn + now);

//Logical Operators:

var ageJohn = 28;
var ageMark = 30;

var johnOlder = ageJohn < ageMark; 
console.log(johnOlder);


//typeof operator:
 //gives your the dataType of the variable


console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'sdff');
var x;
console.log(typeof x);

*/


/*
Operator Precedence: which operator is executed first: Operator precedence page and associativity: MDN
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;


var isFullAge = now - yearJohn >= fullAge;

console.log(isFullAge);


var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark)/ 2;
console.log(average);


//Multiple Assignments:
var x, y;
x = (3 + 5) * 4 - 6;


//More operators:
x = x * 2;
x *= 2;
console.log(x);

x = x + 1;
x+=1;
x++;

*/

// Coding Challenge 1: 
/*
var markMass, markHeight, johnMass, johnHeight;


var bmiMark = markMass/(markHeight*markHeight);
var bmiJohn = johnMass/(johnHeight*johnHeight);

var higherMark = bmiMark > bmiJohn;
console.log(higherMark);

*/

/*
If-Else statements:
*/

/*
var firstName = 'John';
var civilStatus = 'married';

if (civilStatus === 'married'){
    console.log(firstName + ' is marreid');
}
else{
    console.log("Not Married!!");
}
*/


/*
Boolean Logic: AND, OR , NOT
*/

/*
var firstName = 'John';
var age = 16;

if (age < 13){
    console.log(firstName + ' is a boy. ');
}
else if (age > 13 && age < 19){
      console.log(firstName + ' is a teenager. ');  
}
else{
   console.log(firstName + ' is a man. ');
}
*/


/*
Ternary operator and switch statements:
*/

/*

var firstName = 'John';
var age = 21;

//using ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice');

var drink = age >=18 ? 'beer' : 'juice';
console.log(drink);


//using if else conditions:

if (age >= 18){
    var drink = 'beer';
}
else {
    var drink = 'juice';
}

//using switch statements:

var job = 'cop';
switch (job){
    case 'teacher':
        console.log(firstName + ' teaches kids how to code');
        break;
    
    case 'driver':
        console.log(firstName + ' drives and Uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
        
    default:
        console.log(firstName + ' does something else');
}

*/


/*
Truthy and Falsy Values and equality operators:
*/

//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

/*
var height;

height = 'twenty';
//height = '';

if (height || height === 0){ // variable value exists.
    console.log('Variable is defined');
}
else{
    console.log('Variable has NOT been defined');
}

*/

//equality operators:

// == Data type of both the variables do not have to match.  If value is same irrespective of the data type, it will still return true.

// === Data type of both the variables have to match as well. Strict equality operator. Best practice to use === operator always.


/*
CODING CHALLENGE 2
*/

/*
var avgJohn, avgMike;

avgJohn = (89 + 120 + 103)/ 3;
avgMike = (116 + 94 + 123)/3;

if (avgJohn > avgMike){
    console.log("John's team wins: " + avgJohn);
}
else{
    console.log("Mike's team wins: "+ avgMike);
}

*/

/*
Functions:
*/

/*
function calculateAge(birthYear){
    return 2019 - birthYear;
}


var ageSid = calculateAge(1997);
var ageMike  =calculateAge(1947);

console.log(ageMike);
console.log(ageSid);


function yearsUntillRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    console.log(firstName + ' retires in ' + retirement + ' years');
}

//calling the function:
yearsUntillRetirement(2020, "Sid");
*/


/*
Function Statements and Expressions:
*/

//Function declaration
/*
function whatDoYouDo (job, firstName){
    
}
*/

/*
//Function expression
var whatDoYouDo  = function (job, firstName){
    switch(job){
        case 'teacher':
          return firstName + ' teaches how to code.';
        case 'driver':
          return firstName + ' drives a cab in Lisbon';    
        case 'designer':
          return firstName + ' designs beautiful websites';
        default:    
        return firstName + ' does something else';
    }
}

output  = whatDoYouDo('teacher','Siddharth');
console.log(output);

*/

/*
Arrays: Data Structure:
*/

/*
// Initialize new array:
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 148);

console.log(names[0]);
console.log(names.length);

//Mutate Array Data:
names[1] = 'Ben';
console.log(names);

names[names.length] = 'Mary';
console.log(names);


//Different Data Types:
var john = ['John', 'Smith', 1990, 'teacher',false];

console.log(john);

john.push('blue'); //Push adds element to the end of the array.
console.log(john);

john.unshift('Mr.'); //Unshift adds element to the beginning of the array.
console.log(john);


john.pop(); //Removes an element from the end of the array.
console.log(john);


john.pop(); //Removes an element from the end of the array.
console.log(john);


john.shift(); //Removes and element from the beginning of the array.

console.log(john);


john.indexOf(1990);// Returns the index of the argument that you pass.

console.log(john.indexOf(1990));
*/

/*
CODING CHALLENGE 3
*/

/*
function tipCalculator (bill){
    var percentage;
    if (bill < 50){
        percentage = .2;
    }
    else if (bill >= 50 && bill < 200){
        percentage = .15;     
    }
    else{
        percentage = .1;
    }
    return bill * percentage;
}


var bills = [124,48,268];

var tips= [tipCalculator(bills[0]),tipCalculator(bills[1]), tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips,finalValues);

*/


/*
Objects and Properties:

With objects we define key value pairs:


//Object Literal:
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}

console.log(john);

console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new Object Syntax:
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);

*/


/*
Objects and Methods:

//this: this means the current object or the current instance of the class. i.e points to itself.
*/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane','Mark','Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge : function () { //this is a function expression. This function is basically a method of the object.
        this.age = 2019 - this.birthYear;
    }
}

var age = john.calcAge();
console.log(john);

*/

/*
CODING CHALLENGE 4:
*/

/*
var john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height); 
    return this.bmi;  
  }    
}




var mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height); 
    return this.bmi;  
  }    
}


john.calcBMI();
mark.calcBMI();
console.log(john,mark);



if (john.bmi > mark.bmi){
    console.log(john.fullName + ' has a higher bMI of ' + john
               .bmi);
}
else if (john.bmi < mark.bmi){
   console.log(mark.fullName + ' has a higher bMI of ' + mark
               .bmi);      
}
else{
   console.log('They have the same BMI');     
}
*/


/*
Loops and Iteration:
*/

//For Loop:
/*
for (var  i = 0; i < 10; i++){
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'teacher',false];


for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}

*/

/*
While Loop
*/
/*
var john = ['John', 'Smith', 1990, 'teacher',false];
var i = 0;
while (i < john.length){
    console.log(john[i]);
    i++;
}
*/

//continue and break statements:
/*
var john = ['John', 'Smith', 1990, 'teacher',false];

for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}
*/

/*
Looping Backwards:
*/

/*
var john = ['John', 'Smith', 1990, 'teacher',false];

for (var i = john.length - 1; i >=0; i--){
    console.log(john[i]);
}

*/

/*
CODING CHALLENGE 5
*/

/*
var john = {
    fullName: 'John Smith',
    bills: [124,48,268,180,42],
    calcTips: function (){
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++){
            
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            }
            else if (bill >= 50 && bill < 200){
                percentage = .15;          
            }
            else{
                percentage = .1;     
            }         
        
        
        this.tips[i] = bill * percentage;
        this.finalValues[i] = bill + (bill * percentage);
        }
    
    }
    
}

john.calcTips();

console.log(john);

*/



















