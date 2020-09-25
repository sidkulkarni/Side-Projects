/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
What are state variables? 
The state variables simply tells us the condition of the system. We generally use state variables when we want to remember something or the state of something.
*/



 


var scores, roundScore, activePlayer, gamePlaying, lastDice;
//var gamePlaying = true; 
//these are global variables in the global scope.


init();

function init (){ //initializer of the game.
 scores = [0,0];
 roundScore = 0;
 activePlayer = 0; //0 is first player and 1 is second player
    

     
    
 document.querySelector('.dice').style.display = 'none'; 
 document.getElementById('score-0').textContent = '0';
 document.getElementById('score-1').textContent = '0';
 document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';
    
document.getElementById('name-0').textContent = 'Player1';
document.getElementById('name-1').textContent = 'Player2';
    
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active'); 
    
document.querySelector('.player-0-panel').classList.add('active');
    
gamePlaying = true;
    
}



//this is to change something in the DOM // SETTING VALUES IN DOM = SETTER
//document.querySelector('#current-'+ activePlayer).textContent = dice;
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>';


//this is just to read something from the DOM. // READING VALUES FROM DOM = GETTER
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

// we can change the CSS properties from JS using the style attribute, we are changing the inline CSS from here.
//document.querySelector('.dice').style.display = 'none';


//we can use getElementByID, getElementByClass, etc. we do not just need to use querySelector all the time.
//document.getElementById('score-0').textContent = '0';
//document.getElementById('score-1').textContent = '0';


//document.getElementById('current-0').textContent = '0';
//document.getElementById('current-1').textContent = '0';


//function btn (){
//    //Do something here.
//}


// click is one of the event types.
//Different kinds of events: MDN Event Reference Table:


//Method 1 where callback function: btn
//document.querySelector('.btn-roll').addEventListener('click', btn); 


//Method 2 where callback function is an anonoymous function.
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if (gamePlaying) {
    //Step1: Calculate the number:
    var dice = Math.floor(Math.random() * 6) + 1;
     
    //Step2. Display the result.
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    
    //.src is used to change the image property of the elment in the DOM selected.
    diceDOM.src = 'dice-'+ dice + '.png';
    
    


    //Step3. Update the round score IF the rolled number was NOT a 1
    
    //Remember: == does the type coersion or type conversion . === does not do the type coercion. We always want to use this one because it does not perform type coercion.
    
        
    if (dice === 6 && lastDice === 6){
        //Player looses score
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    }    
    else if (dice !== 1){
        //Add score 
        roundScore += dice;
        document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    }
    else{
        //Next player
        nextPlayer();    
    }
      
    lastDice = dice;    
        
    }
    
    

});

//the btn function here is called the callback function because  we want the function to be called whenever we click on the button. That is the reason we write btn and not btn();

/*
Callback function: 
The function that we pass to another function as an argument and the function [eventListener] in our case will call that function for us once the click event is done.



Anonymous Function is a function that cannot have a name so it cannot be reused. You normally have anonymous functions as the callback functions. [Method 2]//


*/

document.querySelector('.btn-hold').addEventListener('click', function (){
    
    if (gamePlaying){ //we can hold our points to store only if the game is playing
    
        
    // Add current score to the global score
    scores[activePlayer] += roundScore;
    
    
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    var input = document.querySelector('.final-score').value;
    var winningScore;    
        
    //undefined, 0 , null or "" are coerced to false
    //Anything else if COERCED to true
    
    if (input){ //when there is some input.
         winningScore = input;
    }
    else{
       winningScore = 100; 
    }
        
    
    //Check if player won the game
    if (scores[activePlayer] >= winningScore){
       document.querySelector('#name-'+ activePlayer).textContent = 'Winner!'; 
        
       document.querySelector('.dice').style.display = 'none';
       
       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
       
       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
       gamePlaying = false;
     
    }
    else{
       //Next player:
       nextPlayer(); 
    }
   
    }
       
});



function nextPlayer (){
    //Next player
        
        //changing the state of the player:
        activePlayer === 0? activePlayer = 1 : activePlayer = 0; //this is ternary operator, exact same thing as writing an if-else condition.
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        //we are adding and removing a class to a particular element in this case:
        
        //Removing a Class:
        //document.querySelector('.player-0-panel').classList.remove('active');
    
    
        //Adding a Class:
        //document.querySelector('.player-1-panel').classList.add('active');
        
        //Instead of adding and removing: we can use toggle.
        //toggle: add a class if it is not there and remove a class if it is there.
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none'; 
    
}


document.querySelector('.btn-new').addEventListener('click', init);


