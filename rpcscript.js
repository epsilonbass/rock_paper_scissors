// computer randomly selects one of three parameters, rock paper or scissors
function computerPlay(selection) {
    choice = ["rock", "paper", "scissor"];
    //selection turns choice into numbers 0-2 and randomly selects one number 
    selection = choice[Math.floor(Math.random() * choice.length)];
    document.getElementById("demo").innerHTML = selection;
}


// prompt user to enter rock paper scissor
// call their response answer
// make their answer all lowercase
// did they answer rock paper or scissor? If not start over
//