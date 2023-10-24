const computerSelection = getComputerChoice();
const opt = document.querySelector('#options');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
opt.appendChild(rock);
opt.appendChild(paper);
opt.appendChild(scissors);
let plScore = 0;
let cpScore = 0;
rock.addEventListener('click', () =>  {
    playRound("Rock", getComputerChoice())
    });
paper.addEventListener('click', () =>  {
    playRound("Paper", getComputerChoice())
    });
scissors.addEventListener('click', () =>  {
    playRound("Scissors", getComputerChoice())
    });

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

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.substring(0, 1).toUpperCase() + playerSelection.substring(1).toLowerCase();
    const hist = document.querySelector('#history');
    const results = document.createElement('div');
    const roundWin = document.createElement('p');
    const playerScore = document.querySelector('#playerScore');
    const cpuScore = document.querySelector('#cpuScore');
    roundWin.textContent = "";
    playerScore.innerText = "";
    cpuScore.innerText = "";
    if (computerSelection === "Scissors" && player === "Rock") {
        roundWin.textContent = "You Win! Rock beats Scissors";
        plScore++;
    }
    else if (computerSelection === "Scissors" && player === "Paper") {
        roundWin.textContent = "You Lose! Scissors beats Paper";
        cpScore++;
    }
    else if (computerSelection === "Paper" && player === "Scissors") {
        roundWin.textContent = "You Win! Scissors beats Paper";
        plScore++;
    }
    else if (computerSelection === "Paper" && player === "Rock") {
        roundWin.textContent = "You Lose! Paper beats Rock";
        cpScore++;
    }
    else if (computerSelection === "Rock" && player === "Scissors") {
        roundWin.textContent = "You Lose! Rock beats Scissors";
        cpScore++;
    }
    else if (computerSelection === "Rock" && player === "Paper") {
        roundWin.textContent = "You Win! Paper beats Rock";
        plScore++;
    }
    else if (computerSelection === player){
        roundWin.textContent = "You Tie!";
    }
    playerScore.innerText = "Your Score: " + plScore;
    cpuScore.innerText = " CPU Score: " + cpScore;
    hist.appendChild(results);
    opt.appendChild(roundWin);
    results.appendChild(playerScore);
    results.appendChild(cpuScore)
}

/*
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
        console.log("Game " + counter + ": You Tie!");
    }
    else {
        console.log("Please enter a valid option");
    }
}

function game() {
    counter = 1;
    while (counter <= 5) {
        counter++;
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Enter either rock, paper, or scissors");
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
 */