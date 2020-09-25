//MovieDB

/*
Create an array of movie objects. Each movie should have a title,
rating, and hasWatched properties. Iterate throguh the array and 
print something that looks like:

var movies = [

{
	title: "In Bruges",
	rating: 5,
	hasWatched: true
}

{
	title: "Frozen",
	rating: 4.5,
	hasWatched: false
}

{
	title: "Mad Max Fury Road",
	rating: 5,
	hasWatched: true
}

{
	title: "Les Miserables",
	rating: 5,
	hasWatched: false
}


];

// Regular For loop
for (int i = 0; i < movies.length; i++){
	movies[i].title;
	movies[i].rating;
	movies[i].hasWatched
}

// For each loop:
movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
	  result += "watched";
	}
	else{
	result+= "not seen";
	}
	result += "\" " + movie.title + "\" - ";
	result += movie.rating + " stars";
	console.log(result);
});




