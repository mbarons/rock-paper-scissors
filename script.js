let playerSelection;
let computerSelection;
let roundWinner;
let computerScore = 0;
let playerScore = 0;



function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3) + 1;
    let computerChoice;
    if (randomNumber == 1) {
        computerChoice = "rock"
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
    computerSelection = computerSelection();

    if (computerScore < 5 && playerScore < 5) {
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
        else if (playerSelection == "paper" && computerSelection == "rock"){
            roundWinner = "player"
        }
        else if (playerSelection == "scissors" && computerSelection == "paper"){
            roundWinner = "player"
        }
        else if (playerSelection == "scissors" && computerSelection == "rock"){
            roundWinner = "computer"
        }

        if (roundWinner == "computer") {
            computerScore++;
        }
        else if (roundWinner == "player") {
            playerScore++;
        }
        roundResult = document.querySelector("#round-result");
        roundResult.textContent = `The winner is ${roundWinner}`;
    
        actualScore = document.querySelector("#actual-score");
        actualScore.textContent = `Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`;

        matchResult = document.querySelector("#match-result");

        if (playerScore == 5) {
            matchResult.textContent = "Congratz! You won the game!"
        }
        else if (computerScore == 5) {
            matchResult.textContent = "Game Over! The computer beat you!"
            }
        }
    else return
    };

const btnRock = document.querySelector("#button-rock");
const btnPaper = document.querySelector("#button-paper");
const btnScissors = document.querySelector("#button-scissors");

btnRock.addEventListener("click", () => oneRound("rock", computerPlay));
btnPaper.addEventListener("click", () => oneRound("paper", computerPlay));
btnScissors.addEventListener("click", () => oneRound("scissors", computerPlay));

/*
for (let i = 0; i < 5; i++) {

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
*/