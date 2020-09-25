var age = prompt("What is your age? ");
if(age<0){
	console.log("There is an error.");
}
else if(age === 21){
	console.log("happy 21st birthday");
}

else if (age%2!== 0){
	console.log("age is odd");
}
else{
	console.log("age is even");
}