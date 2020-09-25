///////////////////////////////////////
// Lecture: Hoisting

/*
calculateAge(1965);
//we run this and this works. This is called hoisting. So in the creation phase of the execution context which in this case is the global execution context: the function declaration: calculateAge is stored in the variable object even before the code is executed. This is why, when we entered the execution phase: the function calculateAge is already available for us to use it.

//So we don't always have to first declare the function and then use it/ call it. 
//But we can also first use it/call it and only later in our code declare it. Remember: this only works for function declarations like calculateAge and not function expressions.


function calculateAge(year){
    console.log(2019 - year);
}
 
//calculateAge(1997); this is how we usually do it. But we also can do this: line 5: use the function call even before we declare it.



//retirement(1997); //this does not work! Causes an error because  retirement is not a function declaration but a function expression. Hoisting does not work for the case of function expressions.

var retirement = function(year){
    console.log(65 - (2019 - year));
}

//retirement(1997); // this is how we usually do it.

/*
HOISTING IN THE CASE OF FUNCTIONS ONLY WORKS FOR FUNCTION DECLARATIONS AND NOT FUNCTION EXPRESSIONS.

Biggest Takeaway from hoisting:

We can call functions/use them even before we declare them in our code.


HOISTING IN THE CASE OF VARIABLES:

if you try to use variables even before they are declared: you will see undefined as the output.

if you use variables after they are declared: then you will see the actual output.
*/


/*
Variables and HOISTING
*/

//trying to use our variable before it is even declared.

/*
console.log(age); // we have undefined as output. That's how hoisting works with variable. Because in the creation phase of the variable object what happens is that the code is scanned for variable declartions and the variable is set to undefined.

var age = 23;
console.log(age); // this is how we usually do it and we get an output. = 23 prints

function foo (){
    console.log(age); //we have undefined as output. Because in the creation phase of the variable object, what happens is that the code isi scanned for variable declarartions and the variable is set to undefined.
    var age = 65;
    console.log(age); //65 prints
}

foo(); // 65 PRINTS
console.log(age); // 23 PRINTS because we are in the global execution object.



*/




///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first(); // first is called properly because first function is hoisted.

function first() {
    var b = 'Hi!';
    second(); //second function is called properly because the second function is hoisted.

    function second() { //Thanks to the SCOPING CHAIN: the second function has access to variables of the first function and the global scope. That's because the second function is written inside of the first which in turn is written inside the global scope. That's why we call it Lexical Scoping.
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this); // window object: the 'this' keyword in the Global Execution Context is very simply the window object.


//calculateAge(1997);

/*
function calculateAge (year){
    console.log(2019 - year); //22
    console.log(this); // as this is a regular function call: the 'this' keyword points to the global window object.
}
*/
/*
var john = {
    name: 'John',
    yearOfBirth : 1990,
    calculateAge: function(){ //this is a method:
        console.log(this); // John object: this word refers to the object that calls the method so in this case it is the John Object.
        console.log(2019 - this.yearOfBirth); 
        
        /*
        function innerFunction(){
            console.log(this); //
        }
        
        innerFunction(); //Window object: this is because of innerFunction being a regular function. When a regular function call happens: this keyword points to the global window object.
        */
        
//    }
//}

/*
john.calculateAge();


var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
}

mike.calculateAge = john.calculateAge; //method borrowing.
//we want the mike.calculateAge function to be the same as John.calculateAge function. We are treating the function as a variable and assigning it to another property / a new property for the Mike Object.

mike.calculateAge();

*/