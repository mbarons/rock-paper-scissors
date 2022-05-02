function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3) + 1
    let computerChoice
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
    let round_winner
    if (playerSelection == computerSelection){ 
        round_winner = "tie"
    }
    else if (playerSelection == "stone" && computerSelection == "paper"){
        round_winner = "computer"
    }
    else if (playerSelection == "stone" && computerSelection == "scissors"){
        round_winner = "player"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        round_winner = "computer"
    }
    else if (playerSelection == "paper" && computerSelection == "stone"){
        round_winner = "player"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        round_winner = "player"
    }
    else if (playerSelection == "scissors" && computerSelection == "stone"){
        round_winner = "computer"
    }
    return round_winner
}

function askInput() {
    let userDecision = prompt("Please, write your decision: Rock, Paper or Scissors")
    return userDecision.toLowerCase()
}

userInput = askInput()
console.log(userInput)