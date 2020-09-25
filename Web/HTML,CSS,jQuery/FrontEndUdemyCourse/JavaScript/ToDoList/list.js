var todos = [];

var input = prompt("What would ou like to do?");

while(input !== "quit"){
if (input === "list"){
	console.log(todos);
}
else if (input === "new"){
	// ask for a new todo 
	var newTodo = prompt("Enter new to do:");
	todos.push(newTodo);

}
	// handle input.//ask again for new input
   input = prompt("What would you like to do?");
}
console.log("Okay , you quit the app");