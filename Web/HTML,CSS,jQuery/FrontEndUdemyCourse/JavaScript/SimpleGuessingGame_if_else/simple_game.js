var secretNumber = 4;

var userGuess = prompt("Guess a number! ");

if(Number(userGuess) === secretNumber){
	alert("You got it right!");
}
else if (Number(userGuess)> secretNumber){
	alert("Too high. Guess again");
}
else {
	alert("Too low. Guess again.");
}