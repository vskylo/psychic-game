

// array of the choices of the computer 
var pool = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","t","u","v","w","x","y","z"];

// Game object contains certain parameters of the game 
var game = {
	wins : 0,
	losses : 0,
	guesses_left : 9 ,
	guesses_sofar : "",

	win_function : function(a){
		this.wins = this.wins + 1 ;
		this.guesses_sofar = "";
		this.guesses_left = 9 ;
	},

	lose_function : function(a){
		this.guesses_left = this.guesses_left - 1;
		this.guesses_sofar=this.guesses_sofar + a + ",";
	}
	
};

// computer choice function
computer_choice= function(){
return  pool[Math.floor(Math.random()*pool.length)];
}



//creating a variable to hold our html, we show something at the beginning of the game

var html = 
	"<p> number of wins " + game.wins + "</p>" +
	"<p> number of losses " + game.losses + "</p>" +
	"<p> guesses you have left " + game.guesses_left + "</p>" +
	"<p> guesses so far " + game.guesses_sofar + "</p>"

// Set the inner HTML contents of the #game div to our html string
 document.querySelector("#game").innerHTML = html;


// The first choice of the computer , let the game begin 
var choice= computer_choice();


document.onkeyup = function(event){

console.log(choice); //Open the console to know beforehand the choice of the computer

// the guess of the user 
var user = event.key.toLowerCase();

if (user === choice){
	game.win_function();
    choice = computer_choice();
	
}
else if ( game.guesses_left=== 1) {
	game.losses = game.losses + 1 ;
	game.guesses_left = 9 ;
	game.guesses_sofar = "" ;
	choice = computer_choice();

}
else {
	game.lose_function(user);
}


//Our new html 
var html = 
	"<p> number of wins " + game.wins + "</p>" +
	"<p> number of losses " + game.losses + "</p>" +
	"<p> guesses you have left " + game.guesses_left + "</p>" +
	"<p> guesses so far " + game.guesses_sofar + "</p>"

// Set the inner HTML contents of the #game div to our html string
 document.querySelector("#game").innerHTML = html;
};




