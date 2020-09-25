/*
DOM

: HTML and CSS interact with JS

DOM makes web pages interactive.

DOM: Document object Model

The Document Object Model is the interface between your JavaScript
and HTML, CSS.

The browser turns every HTML tag into a JavaScript object that we 
can manipulate.


Everything is stored inside of the document object.


------------------------------------
Select and Manipulate: 

Select an element and then Manipulate

var h1 = document.querySelector("h1");

--------------------------------------

DOM Selectors:

Methods:
The document comes with a bunch of methods for selecting elements. 
We're going to learn about the follwing 5:

1) document.getElementById()
2) document.getElementsByClassName()
3) document.getElementsByTagName()
4) document.querySelector()
5) document.querySelectorAll()


(1) getElementById
Takes a string arguement and returns the one element with a matching ID:

var tag = document.getElementById("highlight");

//Selects the li by ID  and returns an object to us.


(2)getElementsByClassName
Takes a string argument and returns a list of elements that have a matching class

var tags = document.getElementsByClassName("bolded");
console.log(tags[0]);


Note: It shows a string representation but behind the scenes, it is an
object.


(3)getElementsByTagName:
Returns a list of all elements of a given tag name, like <li> or <h1>

var tags = document.getElementsByTagName("li");
console.log(tags[0]);

(4)querySelector:
Returns the first element that matches a given CSS-style selector:


//select by tag:
var tag = document.querySelector("h1");

//select by ID:
var tag = document.querySelector("#highlight"); 

//select by class:
var tag = document.querySelector(".bolded");


(5) querySelectorAll:
Returns a list of elements that matches a given CSS-style selector:

//select by tag:
var tags = document.querySelectorAll("h1");

//select by class:
var tags = document.querySelectorAll(".bolded");

Note: Everything that you select, is a javascript object. It is not HTML

Note: All of these methods that you are using  are inside the document object.

Exercise:
4 different ways to select <p>

1) var tag = document.getElementByTagName("p");

2) var tag = document.getElementById("first");

3) var tag = document.getElementByClassName("special")[0];

4) var tag = document.querySelector(".special");

5) var tag = document.querySelectorAll(".special")[0];

-------------------------------------------------
DOM Manipulation:

We're going to cover different ways of:

1) changing an element's style.
2) adding/ removing classes.
3) changing the content of a tag.
4) changing attributes(src, href, etc.)

------------------------------------------------
(1) Style:
The style property is one way to manipulate an element's style:

//SELECT:
var tag = document.getElementById("highlight");

//MANIPULATE:
tag.style.color = "blue";
tag.style.border = "10px solid red";
tag.style.fontSize = "70px";
tag.style.background = "yellow";
tag.style.marginTop = "200px";


An Alternative:
Rather than directly manipulating style with JS, we can define a CSS class 
and then toggle it on or off with JS.

//Instead of this:
var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border = "10px solid red";


//We can do this:

/*Define a class in CSS 

.some-class{
	color: blue;
	border: 10px solid red;
}


var tag = document.getElementById("highlight");

// Add the new class to the selected element:

tag.classList.add("some-class");


classList:
A read-only list that contains the classes for a given element. It is 
not an array.

//Define a class in CSS:

.another-class{
	color: purple;
	fontSize: 76px;
}


var tag = document.querySelector("h1");

//Add a class to the selected element:
tag.classList.add("another-class");

// Remove a class:
tag.classList.remove("another-class");

//toggle a class:
tag.classList.toggle("another-class");

-----------------------------------
Manipulating Text and Content:

(1)textContent: 
=> Returns a string of all the text contained in a given element.


ex)

<p>
 This is an <strong>awesome</strong> paragraph
</p>

//Select the <p> tag:
var tag = document.querySelector("p");

//Retrieve the textContent:
tag.textContent // "This is an awesome paragraph"

//alter the textContent:
tag.textContent = "blah blah blah";


(2) innerHTML:
=> Similar to textContent, except it returns a string of all 
   the HTML contained in a given element.

ex)
<p>
  This is an <strong>awesome</strong> paragraph.
</p>

// select the <p> tag:
var tag = document.querySelector("p");

tag.innerHTML
// "This is an <strong>awesome</strong>paragraph."

--------------------------------------------------

Manipulating Attributes:

Reminder: Attributes are things like:

1] <a href = "www.google.com">I am a link</a>

2] <img src = "logo.png">


Use getAttribute() and setAttribute() to read and write attributes 
like src or href.

<a href = "www.google.com">I am a link.</a>
<img src = "logo.png">

var link = document.querySelector("a");
link.getAttribute("href"); // "www.google.com"

//Change href attribute:
link.setAttribute("href","www.dogs.com");
/// <a href = "www.dogs.com">I am a link</a>

//To Change the Image src:
var img = document.querySelector("img");
img.setAttribute("src", corgi.png);
//<img src = "corgi.png">

-------------------------------------------------------
Section 16: Advance DOM Manipulation:

Introduction to DOM Events:

DOM Events (Making things interactive)

Events are everywhere:
1) Clicking on a button.
2) Hovering over a link.
3) Dragging and Dropping.
4) Pressing the Enter Key.


// this is how we can make games/ form validators/ tic tac toe 
//color picker game

The Process:
We select an element and then add an event Listener.

"Listen for a click on this <button>"
"Listen for a hover event on the <h1>"
"Listen for a keypress event on text input"

The Syntax:
To add a listener, we use a method called addEventListener

element.addEventListener(type, functionToCall);

functionToCall is a callback function.
This code is not run immediately. Once you click on this button,
javascript goes and calls back this function.

ex)

var button = document.querySelector("button");
button.addEventListener ("click", function(){
	console.log("Someone clicked the button.");
} );

// once you click on this button, javascript goes and calls back
this function. 


So this function is run whenever the specific button 
we selected is clicked.

An Example)
Let's display a message when a button is clicked.

<button>Click Me</button>
<p>No One Has Clicked Me Yet</p>

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

//Setup Click Listener:

button.addEventListener("click", function(){
	paragraph.textContent = "Someone Clicked the Button!";
});

//Note: we can have more than one event listener on a given element.


An Example) You don't necessarily have to use a named function.
We could also rewrite it using a named function:

var button = document.querySelector("button");
var paragraph = document.querySelector("p");

button.addEventListener("click", changeText);

function changeText(){
	paragraph.textContent = "Someone Clicked the Button!";
}

-------------------------------------------------

Other Types of Events: Todo List:

MDN event Reference for list of other important events:

ex) click events, drag and drop, hovering events etc.


Two important events : mouseover and mouseout.


















