const choices = ["rock", "paper", "scissors"];
const roundWinner = [];

function startGame() {
    document.getElementById("game").style.display = "block";
    document.getElementById("start").style.display = "none";
}

document.getElementById("start").addEventListener("click", startGame);

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }

    recordWins();
}

function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log("Player chose: " + playerSelection);
    console.log("Computer chose: " +computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    console.log("Winner is: " + winner);
    roundWinner.push(winner);
    console.log("-------------------------");
}

function getPlayerChoice() {
    // let input = prompt("Type Rock, Paper or Scissors");

    // while (input == null) {
    //     input = prompt("Type Rock, Paper or Scissors");
    // }

    // input = input.toLowerCase();
    // let check = validateInput(input);

    // while (check == false) {
    //     input = prompt("You must type Rock, Paper or Scissors!");
    //     input = input.toLowerCase();
    //     check = validateInput(input);
    // }
    
    // return input;
}

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function validateInput(choice) {
    return (choices.includes(choice));
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie";
    } else if ((choiceP === "rock" && choiceC === "scissors") ||
                (choiceP === "paper" && choiceC === "rock") ||
                (choiceP === "scissors" && choiceC === "paper") ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function recordWins() {
    let playerWins = roundWinner.filter((item) => item == "Player").length;
    let computerWins = roundWinner.filter((item) => item == "Computer").length;
    let ties = roundWinner.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player wins:", playerWins);
    console.log("Computer wins:", computerWins);
    console.log("Ties:", ties);
}

game();