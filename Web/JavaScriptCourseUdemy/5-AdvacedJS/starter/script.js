//Function constructor in JavaScript == Classes in C++/Python 



//this is the way we have been writing the objects using the object literal
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'  
};


//Now imagine if we want to create a lot of different objects using different names, DOB, jobs. We can use some kind of blueprint for this. There are many ways to do this but the most popular way to do this is by creating a Function Constructor(is a pattern for writing a blueprint). 

//Method1: Function Constructor pattern




var Person = function (name, yearOfBirth, job){
    this.name  = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
//    this.calculateAge  = function (){
//        console.log(2019 - this.yearOfBirth);
//    }

}

/*
For inheritance: 
we need to add all the methods and properties that we want to be inherited in the constructor's prototype property.
*/
/*
Person.prototype.calculateAge = function (){
        console.log(2019 - this.yearOfBirth);
}



//the method is not anymore in the constructor but the objects can still access it because it is in the protoype property of the function constructor. This is how inheritance actually works.

//so attaching methods to the constructor function's prototype property is very common to use. We can add properties instead of methods also but it is not that common.

//so this proprty is also not directly in the object but we have access to it because it is in the prototype property of the function constructor. So all: 'John', 'Jane', and 'Mark' inherit thtis property.
Person.prototype.lastName = 'Smith';


//this is called as instantiation because this john object is an instance of the Person constructor.
var john = new Person('John',1990, 'teacher');
//when we use a new keyword: a brand new empty object is created, then the constructor function is called with the arguments that we've specified. So first and empty object is created, then the function is called.

console.log(john.calculateAge()); //29

var jane = new Person('Jane', 1969, 'designer');
console.log(jane.calculateAge()); //50

var mark = new Person('Mark', 1948, 'retired');
console.log(mark.calculateAge()); //71




console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/


/*
We have seen the function constructor pattern to create an object from a blueprint. There are more ways to create objects and inheritance. 
*/

//Method2: Object.create 

/*
var personProto =  {
    calculateAge: function (){
        console.log(2019 - this.yearOfBirth);
    }
}


var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';



var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
})
*/






//Primitives vs Objects:
/*
We already know that only numbers, strings, booleans and undefined are primitives and everything else is objects. There are still more differences between primitives and objects.
*/

/*
//Primitives:
var a = 23;
var b = a; //copied the value of a to b.
a = 46; //when we changed the value of a here. This did not change the value of b which is still 23. That means each of the variables have their own copy of data. They do not reference anything. So two variables with primitives are really two different things.
console.log(a); //46
console.log(b); //23

//Objects:
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1; //similar to what we did for b = a on line 113. When we set obj2 = obj1, we did not actually create a new object. No copy was created here. All that we did is we created a new reference that points to the first object. So object1 and object2 variables both hold a reference that point to the exact same object in memory. And that's why when we change the age on object1, the change is also reflected in object2 because in fact it is the exact same object.

obj1.age = 30; 
console.log(obj1.age); // 30
console.log(obj2.age); //30




//Functions:
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a,b){ //all this function does is mutate the data
    a = 30;
    b.city = 'San Francisco';
}


change(age, obj); //we passed the age variable holding a primitive and an object variable holding a reference to an object into our function. This function as it was invoked, attempted to change the arguments that we passed into it.


//We observe the same thing:
console.log(age); //27. the primitive remains unchanged.
console.log(obj.city); //San Francisco. The city in the object has changed from Lisbon to San Francisco.

//So this shows us: when we pass a primitive into a function, a simple copy is created. So we can change a as much as we want, it will never affect the variable on the outside because it is a primitive. 

//But when we pass the object, its not really the object that we pass, but actually a reference that points to the object.

*/


/////////////////////////////////////////////
//First Class Functions:
//Lecture: Passing functions as arguments.

/*
var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr,fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
      arrRes.push(fn(arr[i]));  
    }
    return arrRes;
}


//Callback function: They are functions that we pass into functions that will then call them later. In this case, function fn is a callback function as fn would be passed as a parameter to the arrayCalc function and arrayCalc function would call the function fn later.


function calculateAge(el){
    return 2019 - el;
}

function isFullAge(el){
    return el >= 18;
    
}


function maxHeartRate(el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }
    else{
        return -1;
    } 
}



//calculate age is the callback function.
var ages = arrayCalc(years, calculateAge);
console.log(ages);


var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);


var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

*/

//////////////////////////////////////////
//In JS, functions can return other functions as they are first class functions.
//Functions returning functions: ex)

/*
function interviewQuestions(job){
    if (job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if (job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else {
        return function(name){
            console.log('Hello ' + name + ', what d you do?');
        }
    }
}



var teacherQuestion = interviewQuestions('teacher');
console.log(teacherQuestion);

teacherQuestion('John');


var designerQuestion = interviewQuestions('designer');
console.log(designerQuestion);


designerQuestion('Mark');
designerQuestion('Jane');
designerQuestion('Mike');



//Another way to do the same thing:
interviewQuestions('teacher')('Siddharth'); //What subject do you teach, Siddharth?

*/




//////////////////////////////////////////////////
//Immediately Invoked Function Expressions (IIFE): 
//Purpose of IIFE: Data Privacy. This is code which we wouldn't be using again.

/*
function game(){
    var score = Math.random()*10; // random number between 0..9
    console.log(score>=5);
}
game();
*/
//Alternative way to write the above function and function call


//This is an IIFE:
/*
(function(){
    var score = Math.random()*10; // random number between 0..9
    console.log(score>=5);
})();

console.log(score); // score is undefined.
*/

//Another example of an IIFE with parameter.

/*
(function (goodLuck){
    var score = Math.random() * 10;
    console.log(score>=5 - goodLuck);
})(5);
*/







////////////////////////////////////////////////////////////
///Lecture: Closures:

/*
function retirement (retirementAge){
    
    var a = ' years left until retirement';
    return function (yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a );
    } 
}



var retirementUS = retirement(66);



var retirementGermany = retirement(65);


var retirementIceland = retirement(67);


retirementUS(1997);
retirementGermany(1997);
retirementIceland(1997);


//retirement(66)(1990);

/*
function interviewQuestions(job){
    if (job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if (job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else {
        return function(name){
            console.log('Hello ' + name + ', what d you do?');
        }
    }
}
*/
//Writing the above function using closures:

/*
function interviewQuestions(job){
    return function (name){
        if (job === 'designer'){
            console.log(name + ', can you please explain what UX design is?');
        }
        else if (job === 'teacher'){
              console.log('What subject do you teach, ' + name + '?');     
        }
        else{
           
            console.log('Hello ' + name + ', what d you do?');
        }
    } 
}

interviewQuestions('teacher')('sid');

//Output: What subject do you teach sid?
*/




///////////////////////////////////////////////////////////////

//Lecture: Bind, Call and Apply methods: (In a nutshell, these methods allow us to call a function and set the this variable manually)

//object using object literal syntax:

/*

var john = {
    name: 'John',
    age : 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log("Good "+ timeOfDay + "Ladies and Gentlemen! I am "+ this.name + ". I am "+this.job + " I am "+ this.age + " years old.");
        }
        else if (style === 'friendly'){
            console.log("Hey! What's up? I am" + this.name + ". I am "+this.job + "I am "+ this.age + " years old. Have a nice "+timeOfDay + ".");
        }
    }
}

john.presentation('formal', 'morning');



var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

//Call:

//Suppose that we want to use the presentation method for the emily object which does not have this presentation method. 
//We can use the call method to do this.


//So how does this work?: The first argument of the call method is to always set the this variable.

//This is called method borrowing: because we actually borrowed the method from John to use it here on the Emily object.

//the call method allows us to set the this variable in the first argument and we set it to emily because we wanted to use John's presentation method by setting the this variable to emily so that we get to use John's method on Emily.

john.presentation.call(emily, 'friendly', 'afternoon');


//Apply:  (Apply has same functionality as call method but just a different way to pass the data)
john.presentation.apply(emily, ['friendly', 'night']);



//Bind:
//Bind is very similar to the call method as well so it also allows us to set the this variable explicity. However, he difference is that bind does not immediately call the function. Instead it creates a copy of the function so that we can store it somewhere. [Basically the bind method will return a function.]

var johnFriendly = john.presentation.bind(john,'friendly');
//johnFriendly stores the function with style parameter as 'friendly' and timeOfDay parameter not inputted.



johnFriendly('morning'); //now we set the timeofDay parameter which I had initially not set earlier.

johnFriendly('night');
//Bind allows us to preset some arguments here like we presetted style: 'friendly'.

//Currying: It is a technique in which we create a function based on another function but with some preset parameters. That 's what we exactly did here.


//We can do this for Emily:
var emilyFormal = john.presentation.bind(emily,'formal');

emilyFormal('afternoon');


*/

//Coding Challenge 7:

var Question = function (question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}


var q1 = new Question('What is your name?', ['Sid','Siddharth','SK'], 'Siddharth');

var q2 = new Question('What is your major?', ['CS', 'CE', 'CSE'], 'CE');

var arrayQuestions = [];
arrayQuestions.push(q1);
arrayQuestions.push(q2);


function selectQuestion(question0, question1){
    
    var qNo = Math.floor(Math.random()*2);
    if (qNo === 0){
        return function (){
         console.log(question0.question);
         for (var i = 0; i <question0.answers.length; i++){
            console.log(question0.answers[i]);
         } 
        }

    }
    else {
        return function(){
         console.log(question1.question);
         for (var i = 0; i <question1.answers.length; i++){
            console.log(question1.answers[i]);
         }   
        }

    }
}

var questionSelected = selectQuestion(q1,q2);
var prompt = prompt("What do you think is the correct answer?");

if (questionSelected.correctAnswer === questionSelected.answers[prompt-1]){
    console.log("Your answer is correct.");
}
else {
    console.log("Your answer is wrong.");
}


//
//function checkCorrectAnswer(){
//    if ()
//}
























