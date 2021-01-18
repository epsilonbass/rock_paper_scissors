// computer randomly selects one of three parameters, rock paper or scissors
function playerPlay(playerSelection) {
    playerSelection = prompt("Rock/Paper/Scissors?").toLowerCase();
    if (playerSelection === "rock" ||
        playerSelection === "paper" ||
        playerSelection === "scissors"){
        document.getElementById("playerdemo").innerHTML = playerSelection;
    } else {
        document.getElementById("playerdemo").innerHTML = "<h1>You are an idiot...</h1>";
    }
    
}
function computerPlay(computerSelection) {
    choice = ["rock", "paper", "scissor"];
    //selection turns choice into numbers 0-2 and randomly selects one number 
    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    document.getElementById("demo").innerHTML = computerSelection;
}



// prompt user to enter rock paper scissor
// call their response answer
// make their answer all lowercase
// did they answer rock paper or scissor? If not start over
//