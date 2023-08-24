//Creating variables for the player, computer and result
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

// Variable for the buttons

const choiceBtns = document.querySelectorAll(".choiceBtn");


//Create variables for player, computer choice and result

let playerChoice;
let computerChoice;
let result;

//Iterating over the buttons to make a choice
choiceBtns.forEach(button => button.addEventlistener("click", () => {
    playerChoice = button.textContent;
    //Invoke a function for computer choice
    computerTurn()
    playerText.textContent = `Player: ${playerChoice}`;
    computerText.textContent = `Computer: ${computerChoice}`;
    //Invoke a winner function for the result
    resultText = checkWinner();

}))

//Create the computer choice function called computerTurn
function computerTurn(){
    //Craete a random number between 1 and 3.
    const randNum = Math.floor(Math.random() * 3) +1;
    switch(randNum){
        case 1:
            computerChoice = "ROCK";
            break;
        case 2:
            computerChoice = "PAPER";
            break;
        case 3:
            computerChoice = "SCISSORS";
            break;


    }

}

//The choosing the winner function

function checkWinner(){
    if (computerChoice == playerChoice){
        return "It's a draw!"
    }
    else if(computerChoice == "ROCK"){
        return(playerChoice == "PAPER") ?"You Lost!" : "You Won mann!";
    }
    else if(computerChoice == "PAPER"){
        return(playerChoice == "SCISSORS") ?"You Lost mann" : "You won";
    }
    else if(computerChoice == "SCISSORS"){
        return(playerChoice == "ROCK") ?"You lost !!" : "You won !!"
    }
}