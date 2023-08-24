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