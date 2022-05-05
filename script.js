let computerScore = 0;
let playerScore = 0;
let winnerMessage = document.querySelector(".final-message");;
let roundResult = document.querySelector(".round-winner");
let playerImage = document.querySelector("#player-img");
let cpuImage = document.querySelector("#cpu-img");
let resetButton = document.createElement("button");
let resetContainer = document.querySelector(".reset-button-container");
let playerScoreDisplay = document.querySelector("#player-score");
let cpuScoreDisplay = document.querySelector("#cpu-score");

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => startGame("rock"));
btnPaper.addEventListener("click", () => startGame("paper"));
btnScissors.addEventListener("click", () => startGame("scissors"));
resetButton.addEventListener("click", () => reset());

function createReset() {
    resetButton.innerHTML = "Play Again";
    resetContainer.appendChild(resetButton);
}

function reset() {
    computerScore = 0;
    playerScore = 0;
    roundResult.textContent = "";
    winnerMessage.textContent = "";
    playerImage.textContent = "";
    cpuImage.textContent = "";
    cpuScoreDisplay.textContent = 0;
    playerScoreDisplay.textContent = 0;
    resetContainer.removeChild(resetButton);
}

function changeImagePlayer(decision) {
    if (decision == "rock") {
        playerImage.textContent = "✊";
    }
    else if (decision == "paper") {
        playerImage.textContent = "✋";
    }
    else {
        playerImage.textContent = "✌";
    };
};

function changeImageCPU(decision) {
    if (decision == "rock") {
        cpuImage.textContent = "✊";
    }
    else if (decision == "paper") {
        cpuImage.textContent = "✋";
    }
    else {
        cpuImage.textContent = "✌";
    };
};

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
    };
    return computerChoice;
}

function oneRound(playerSelection, computerSelection) {
    let roundWinner;

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
        if (roundWinner == "player") {
            roundResult.textContent = "You won this round!";
        }
        else if (roundWinner == "computer") {
            roundResult.textContent = "Computer won this round!";
             }
        else {
            roundResult.textContent = "That was a tie!";
        }

        changeImageCPU(computerSelection);
        changeImagePlayer(playerSelection);
        playerScoreDisplay.textContent = playerScore;
        cpuScoreDisplay.textContent = computerScore;

        if (computerScore == 5) {
        
            winnerMessage.textContent = "GAME OVER! The computer beat you.";
            createReset();
        }
        else if (playerScore == 5) {
            winnerMessage.textContent = "CONGRATULATIONS! You won the game!";
            createReset();
        }
    }
}

function startGame(playerDecision){
    let computerDecision = computerPlay();
    oneRound(playerDecision, computerDecision);
}