function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection, counter) {
    let player = playerSelection.substring(0, 1).toUpperCase() + playerSelection.substring(1).toLowerCase();
    if (computerSelection === "Scissors" && player === "Rock") {
        console.log("Game " + counter + ": You Win! Rock beats Scissors");
    }
    else if (computerSelection === "Scissors" && player === "Paper") {
        console.log("Game " + counter + ": You Lose! Scissors beats Paper");
    }
    else if (computerSelection === "Paper" && player === "Scissors") {
        console.log("Game " + counter + ": You Win! Scissors beats Paper");
    }
    else if (computerSelection === "Paper" && player === "Rock") {
        console.log("Game " + counter + ": You Lose! Paper beats Rock");
    }
    else if (computerSelection === "Rock" && player === "Scissors") {
        console.log("Game " + counter + ": You Lose! Rock beats Scissors");
    }
    else if (computerSelection === "Rock" && player === "Paper") {
        console.log("Game " + counter + ": You Win! Paper beats Rock");
    }
    else if (computerSelection === player){
        console.log("Game " + counter + ": You Tie!" + computerSelection);
    }
    else {
        console.log("Please enter a valid option");
    }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Enter either rock, paper, or scissors");
console.log(playRound(playerSelection, computerSelection));

function game() {
    counter = 1;
    while (counter <= 5) {
        counter++;
        playRound(playerSelection, computerSelection, counter);
    }
}

game();