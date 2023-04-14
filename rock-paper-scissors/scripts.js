const choices = ["rock", "paper", "scissors"];

function game() {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
}

function playerChoice() {
    let input = prompt("Type Rock, Paper or Scissors");
}

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

game();