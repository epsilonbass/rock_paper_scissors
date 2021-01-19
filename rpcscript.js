let computerScore = 0;
let playerScore = 0;


// computer randomly selects one of three parameters, rock paper or scissors
function computerPlay() {
    choice = ["rock", "paper", "scissors"];
    //selection turns choice into numbers 0-2 and randomly selects one number 
    computerPick = choice[Math.floor(Math.random() * choice.length)];
    //document.getElementById("demo").innerHTML = computerSelection;
    //for my review vvvv
   return computerPick;
}


//document.getElementById("goButt").addEventListener("click", game);

function playerPlay() {
    let playerChoice = prompt("Rock/Paper/Scissors?");
    playerChoice.toLowerCase();
    return playerChoice;
    
}

function game(){
let playerSelection = playerPlay();
let computerSelection = computerPlay();


  


    function playRound(playerSelection, computerSelection){
    
    

    if (playerSelection === "rock" && computerSelection === "rock") {
            return "Draw";
        } if (playerSelection === "rock" && computerSelection === "paper") {
            computerScore += 1;
            return "Paper beats rock, you lose.";
        } if (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore += 1;
            return "Rock beats scissors, you win!";
        } if (playerSelection === "paper" && computerSelection === "paper") {
            return "Draw";
        } if (playerSelection === "paper" && computerSelection === "scissors") {
            computerScore += 1;
            return "Scissors beats paper, you lose.";
        } if (playerSelection === "paper" && computerSelection === "rock") {
            playerScore += 1;
            return "Paper beats rock, you win!";      
        } if (playerSelection === "scissors" && computerSelection === "scissors") {
            return "Draw";
        } if (playerSelection === "scissors" && computerSelection === "rock") {
            computerScore += 1;
            return "Scissors beats paper, you lose.";
        } if (playerSelection === "scissors" && computerSelection === "paper") {
            playerScore += 1;
            return "Scissors beats paper, you win!";      
        }
    }

    //console.log(playRound(playerSelection, computerSelection))
    document.getElementById('playerdemo').innerHTML = playRound(playerSelection, computerSelection);
    document.getElementById('scoreboard').innerHTML = "Player: " + playerScore + " || " + "Computer: " + computerScore ;

    if (playerScore === 3) {
        document.getElementById('gameinfo').innerHTML = "<h1> YOU WIN! </h1>"
    } if (computerScore === 3) {
        document.getElementById('gameinfo').innerHTML = "<h1> YOU LOSE!</h1>"
    }
}



//console.log(computerPlay());
//const playerSelection = playerPlay();
//const computerSelection = computerPlay();


  










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