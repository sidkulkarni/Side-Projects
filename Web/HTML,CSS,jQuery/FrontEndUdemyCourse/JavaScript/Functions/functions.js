function isEven(num){
 if (num%2 === 0){
 	return true;
 }
 else{
 	return false;
 }
}


function factorial(num){ 
  var val = 1;	
  for(int i = num; i>= 1; i--){
  	val = val * num;
  }
  return val;
}

function kebabToSnake(str){
	var newStr = str.replace(/-/g, "_");
	return newStr;
}