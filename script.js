let playerSelection;
let computerSelection;
let roundWinner;
let computerScore = 0;
let playerScore = 0;

function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let computerChoice;
    if (randomNumber == 1) {
        computerChoice = "stone"
    }
    else if (randomNumber == 2) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
    return computerChoice
}

function oneRound(playerSelection, computerSelection) {
    let roundWinner;
    if (playerSelection == computerSelection){ 
        roundWinner = "tie"
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        roundWinner = "computer"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        roundWinner = "player"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        roundWinner = "computer"
    }
    else if (playerSelection == "paper" && computerSelection == "stone"){
        roundWinner = "player"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        roundWinner = "player"
    }
    else if (playerSelection == "scissors" && computerSelection == "stone"){
        roundWinner = "computer"
    }
    return roundWinner;
}


for (let i = 0; i < 5; i++) {
    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){ 
        playerSelection = prompt("Please, write your decision: Rock, Paper or Scissors").toLowerCase();
    }

    computerSelection = computerPlay();
    roundWinner = oneRound(playerSelection, computerSelection);
    if (roundWinner == "computer") { 
        computerScore++;
        console.log("Computer won this round!");
    }
    else if (roundWinner == "player") {
        playerScore++;
        console.log("You won this round!");
    }
    else {
        console.log("That was a tie!");
    }
    console.log(`Score => You: ${playerScore} Computer: ${computerScore}`);
    playerSelection = 0;

    if (i == 4 && computerScore == playerScore) {
        console.log("GG! You tied with the computer. Refresh the page to try again!");
    }
    else if (i == 4 && computerScore > playerScore) {
        console.log("Game Over! The computer beat you. Refresh the page to try again!");
    }
    else if (i == 4 && computerScore < playerScore) {
        console.log("Congratz! You won the game! Refresh the page to try again!");
    }
}