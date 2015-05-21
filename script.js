var computerChoice = Math.floor(Math.random()*3); 
var userChoice = prompt("Choose 'rock', 'paper' or scissors' ");
var choices = ["rock", "paper", "scissors"];



console.log(computerChoice); 
console.log(choices[computerChoice]); 

function theGame() {
	while ((userScore <= 5) || (computerScore <= 5)) {
		//this loop isn't working 
		var computerScore = 0; 
    var userScore = 0; 
		if (choices[computerChoice] === userChoice) {
			alert("It's a tie"); 
		}
		else if (choices[computerChoice] === "rock" && userChoice === "paper") {
			alert("You win!");
			userScore += 1; 
		}
		else if (choices[computerChoice] === "rock" && userChoice === "scissors") {
			alert("Computer wins");
			computerScore += 1; 
		}
		else if (choices[computerChoice] === "paper" && userChoice === "rock") {
			alert("Computer wins");
			computerScore += 1; 
		}
		else if (choices[computerChoice] === "paper" && userChoice === "scissors") {
			alert("You win");
			userScore += 1; 
		}
		else if (choices[computerChoice] === "scissors" && userChoice === "rock") {
			alert("You win");
			userScore += 1; 
		}
		else if (choices[computerChoice] === "scissors" && userChoice === "paper") {
			alert("Computer wins");
			computerScore += 1; 
		}
	}
}
console.log("You have " + userScore + (" points")); 
console.log("The computer has " + computerScore + (" points")); 

theGame(); 


// 00
// 01
// 02
// 11
// 21
// 22

// matching game of colors 
// add red withing html 
// click on something its red 
// click on something its red 
// you hava a match 

// one id per element 
