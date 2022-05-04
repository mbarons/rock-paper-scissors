let computerScore = 0;
let playerScore = 0;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => startGame("rock"));
btnPaper.addEventListener("click", () => startGame("paper"));
btnScissors.addEventListener("click", () => startGame("scissors"));

function changeImagePlayer(decision) {
    let playerImage = document.querySelector("#player-img");
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
    let playerImage = document.querySelector("#cpu-img");
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


function startGame(playerDecision){
    let computerDecision = computerPlay();
    oneRound(playerDecision, computerDecision);
}

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
        let roundResult = document.querySelector(".round-winner");
        if (roundWinner == "player") {
            roundResult.textContent = "You won this round!";
        }
        else if (roundWinner == "computer") {
            roundResult.textContent = "Computer won this round!";
             }
        else {
            roundResult.textContent = "That was a tie!";
        }

        changeImageCPU(playerSelection);
        changeImagePlayer(computerSelection);

        let playerScoreDisplay = document.querySelector("#player-score");
        playerScoreDisplay.textContent = playerScore;

        let cpuScoreDisplay = document.querySelector("#cpu-score");
        cpuScoreDisplay.textContent = computerScore;

    }}
        /*actualScore = document.querySelector("#actual-score");
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



*/
