var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function(){

	if(isPurple === true){
		document.body.style.background = "white";
		isPurple = false;
	}
	else{
		document.body.style.background = "purple";
		isPurple = true;
	}

});


// //alternative way:

// button.addEventListener("click", function(){
//  document.body.classList.toggle("purple");
// });