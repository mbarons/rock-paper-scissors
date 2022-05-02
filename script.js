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
