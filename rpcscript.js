// computer randomly selects one of three parameters, rock paper or scissors
function computerPlay(computerSelection) {
    choice = ["rock", "paper", "scissor"];
    //selection turns choice into numbers 0-2 and randomly selects one number 
    computerSelection = choice[Math.floor(Math.random() * choice.length)];
    //document.getElementById("demo").innerHTML = computerSelection;
    //for my review vvvv
    console.log("computer says " + computerSelection);
   
}
function playerSelection(){
playerSelection = prompt("Rock/Paper/Scissors?").toLowerCase();
console.log(playerSelection)
}

function playRound(playerSelection, computerSelection){
  //your code here!
}

//const playerSelection = "rock"
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

  










//excute playerPlay and computerPlay
    //  let playerSelection = prompt("Rock/Paper/Scissors?").toLowerCase();
    /*
    if (playerSelection === "rock" ||
        playerSelection === "paper" ||
        playerSelection === "scissors"){
       // document.getElementById("playerdemo").innerHTML = playerSelection;
    } else {
        //document.getElementById("playerdemo").innerHTML = "<h1>You are an idiot...</h1>";
        alert("You are an ididot...")
    }
    
    //if playerPlay Rock {
        if (playerSelection === "rock") {
            // computerSelection Rock then "Draw, no points." 
            if (computerSelection === "rock"){
                alert("Draw, no points");
            // computerSelection Paper then "You lose. Paper Beats Rock" increase computerScoreby one
            } if (computerSelection === "paper"){
                alert("You lose, Paper beats Rock");
            
    // computerSelection Scissors then "You win. Rock beats scissors" increase playerScore by one
            } if (computerSelection === "scissors"){
                alert("You win, Rock beats Scissors!");
            }
        }
        */
    //if playerPlay Paper {
    // computerPlay Paper then "Draw, no points."
    // computerPlay Scissors then "You lose. Scissors Beats Paper" increase computerScore by one
    // computerPlay Rock then "You win. Paper Beats Rock" increase playerScore by one

    //if playerPlay Scissors {
    // computerPlay Scissors then "Draw, no points."
    // computerPlay Rock then "You lose. Rock beats scissors" increase computerScore by one
    // computerPlay Paper then "You win. Scissors beats Paper " increase playerScore by one