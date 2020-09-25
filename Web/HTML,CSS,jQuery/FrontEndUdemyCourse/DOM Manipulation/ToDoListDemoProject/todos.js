var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++){
	list[i].addEventListener("mouseover", function(){
     this.classList.add("selected");
     });

    list[i].addEventListener("mouseout", function(){
     this.classList.remove("selected");
    });

    lis[i].addEventListener("click",function(){
      this.classList.toggle("done");
    });

}


//We don't want our JavScript manipulating individual styles,
// rather we want Javascript to turn on parts of our CSS.
// using classList.add("") / classList.remove("");



