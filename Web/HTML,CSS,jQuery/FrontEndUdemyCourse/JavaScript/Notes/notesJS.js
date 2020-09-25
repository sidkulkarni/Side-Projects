/*
JavaScript Basics 
-----------------------------------------------------------
Primitive Datatypes:

//Numbers: 
4, 9.3 , -10

//Strings:
"Hello World"
"43"

//Boolean:
true
false

//null and undefined 
null
undefined

-----------------------------------------------------------
Variables: 

var yourVariableName = yourValue;

// They can store all of the values we've seen:

var name = "Rusty";
var seecretNumber = 73;
var isAdroable = true;

JavaScript has a property called dynamic typing. That means it doesn't care if 
we change the type of the variable.

Note:

variables in Javascript follow camelCase.
snake_case
kebab-case
-------------------------------------------------------------
Null and Undefined:

// The two other primitives are null and undefined:

//Variables that are declared but not 
//initalized are undefined.

// The following variables are undefined:

var name;
var age;


// null is "explicitly nothing"

var currentPlayer = "charlie";
currentPlayer = "null"// gameover

----------------------------------
Built in methods:

1) alert
2) prompt
3)console.log
4) clear()


--------------------------------
JavaScript Basics: Control Flow:

Boolean Logic:
1) Everything starts with the idea that a statement is either True or False

2) Then we can combine those initial statements to create more complex statements 
   that also evaluate to True or False


   In Javascript:

 [
   ===
   !==
 ]

Truthy and Falsy Values:

Values that aren't actually true  or false, are still inherently truthy or falsey when
evaluated in boolean logic. 


Rule:

Falsy Values:

1) false
2) 0
3) ""
4) null
5) undefined
6) NAN

Everything else is truthy.

------------------------------------------------
JS Conditionals:

if 
else if 
else

----------------------
Loops:

while(condition){
	code
}

For loops:

for(init; condition; increment){
	
}

----------------------
JS Functions: 

Functions let us wrap bits of code up into REUSABLE
packages. They are one of the building blocks of JS

Declare a function first:

function doSomething(){
	console.log("Hello World");
}

referring to a function: doSomething
=>gets the code present in the function doSomething

executing a function: doSomething()
=> calls the function and exectutes it. Actually runs the code.
	

Then call it:
doSomething();
doSomething();
doSomething();
doSomething();

Function Arguments:

//Often we want to write functinos that take inputs.
function square(num){
	console.log(num*num);
}

//Now when we call square we need to pass in a value/

square(10); // prints 100
square(3); //prints 9
square(4); // prints 16

-------------------
Function Declaration:->

function doSomething(){
	console.log("Declare Something");
}


Function Expression:->
[In the example given below: It is an anonymous function]

var something = function(){
	console.log("Express Something");
};

[However, it could also be a named function.]
var something = function something(){
	console.log("Express Something");
}


When you type the follwing in console:
[1] {Passes the entire code present in the function. Prints out the code for the function}

something 
=> function something(){
	console.log("Express Something");
}

[2] {actually executes the code}
something()
=> "Express Something"


Differences between function declaration and function expression:-=>

1> Function declaration is hoisted.
i.e the code in the function declaration is sent to the top of the page. That means you can call that
function before it is defined.

*****
Program:
eg 1) something()
=> Express Something

eg 2) something
=>function something(){
	console.log("Express Something");
}
  
function something(){
	console.log("Express Something");
}
*****
------

2> This is not true in the case of a function expression. Function expression is not hoisted.
The variable itself will be hoisted (eg: something) but not the function.

When you try to call the function using variable name before the function expression:

*****
Program:


console: something
=>undefined
The variable itself will be hoisted. However, it doesn't have anything yet. You won't get error there.

However, when you try to execute that: by adding parenthesis to the end: Something() -> You will get a type error.
console: something()
=>TypeError

var something = function something(){
	console.log("Express Something");
}


--------------------
JS Arrays:


1) Push, Pop (Add and Remove from the end of the array.) 

2)Shift and Unshift (Add and Remove from the start of the array.)

3)IndexOf (to find the index of an item in an array.)
 slice (to copy different portions of the array.)



 -----------------
 Array Iteration:

 For vs For Each:
The following two code snippets do the same thing:


// with a for loop:
var colors = ["red", "orange", "yellow", "green"];

for(var i = 0; i < colors.length; i++){
	console.log(colors[i]);
}


//using forEach:
var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(color){
	console.log(color);
});


-----------------------------

JavaScript Objects:

var person = {
 name : "Cindy";
 age : 32;	
 city: "Missoula";
};

var person = {
 name: "Travis";
 age : 21;
 city: "LA";
};

Retrieving Data:

var person = {
 name: "Travis";
 age : 21;
 city: "LA";	
};

// bracket notation, similar to arrays"
console.log(person["name"]);

// dot notation:
console.log(person.name);

Updating Data:
Just like an array: access a property and reassign it.

var person = {
 name: "Travis",
 age : 21,
 city: "LA"	
};

//to update age:
person["age"]+=1;

//to update city
person.city = "London";


Creating objects:
Like arrays, there are a few methods of initializing objects:


// make an empty object and then add to it

var person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA";

//all at once:
var person = {
	name: "Travis",
	age: 21;
	city: "LA"
};

//another way of initialzing an object:
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";



Note: Objects can hold all sorts of data.

var junkObject = {
	age: 57, 
	color: "purple",
	isHungry: true,
	friends: ["Horatio", "Hamlet"],
	pet: {
	 name : "Rusty",
	 species: "Dog",
	 age: 2 
	}
};

----------
Comparing objects and arrays.

var dogs = ["Rusty", "Lucky", "Bubba"]

var dog = {
 name: "Bubba",
 breead: "Lab"	
};


----------- 
Nested Objects and Arrays:



someObject.friends[0].name =>

















