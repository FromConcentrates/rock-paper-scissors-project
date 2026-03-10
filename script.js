
const mainDiv = document.getElementById('main');
const results = document.getElementById('results');
let getPlayerScore = document.getElementById('playerScore');
let getComputerScore = document.getElementById('computerScore');

function getComputerChoice() {
    turn = Math.random();
    if (turn < (1/3)) { // removed redundant condition (turn >= 0) since Math.random() never returns a negative number
        return ('rock');
    } else if (turn < (2/3)) {
        return ('paper');
// Else if with conditions isn't necessary here because it's the only other option
    } else {
        return ('scissors'); 
    }
}

function getHumanChoice() {
    choice = prompt("Do you choose Rock, Paper, or Scissors?", 'Ex: Scissors');
    return choice;

}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    let roundResults = document.createElement('p');
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice ==='paper' && computerChoice ==='rock') {
        roundResults.textContent = 'Paper covers rock; the Human wins!';
        ++humanScore;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        roundResults.textContent ='Rock crushes scissors; the Human wins!';
        ++humanScore;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        roundResults.textContent = 'Scissors cut paper; the Human wins!';
        ++humanScore;
    }
    else if (computerChoice === 'paper' && humanChoice === 'rock') {
        roundResults.textContent = 'Paper covers rock; the Computer wins!';
        ++computerScore;
    }
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        roundResults.textContent = 'Rock crushes scissors; the Computer wins!';
        ++computerScore;
    }
    else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        roundResults.textContent = 'Scissors cut paper; the Computer wins!';
        ++computerScore;
    }
    else { roundResults.textContent = 'This round is a tie';

    }
        results.appendChild(roundResults);
        getPlayerScore.textContent = `Player: ${humanScore} `;
        getComputerScore.textContent = `Computer: ${computerScore}`;
    }
    


    function Score() {
        let scores = document.createElement('p');
        if (humanScore > computerScore) {
        scores.textContent = 'The human wins the game!';
    }
    else if (computerScore > humanScore) {
        scores.textContent = 'The computer wins the game!';
    }
    else {
        scores.textContent = 'It is a tie';}
        results.appendChild(scores);
    } 

function playGame() {
    let roundTotal = 0;
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");
    rockBtn.classList.add('btn');
    paperBtn.classList.add('btn');
    scissorsBtn.classList.add('btn');
    
    rockBtn.textContent = 'Rock';
    paperBtn.textContent = 'Paper';
    scissorsBtn.textContent = 'Scissors';

    rockBtn.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
    roundTotal++;
    if (roundTotal === 5) { Score(); }
    })

    mainDiv.appendChild(rockBtn);

    paperBtn.addEventListener('click', function() {
        playRound('paper', getComputerChoice());
        roundTotal++;
        if (roundTotal === 5) { Score(); }
    })

    mainDiv.appendChild(paperBtn);

    scissorsBtn.addEventListener('click', function() {
        playRound('scissors', getComputerChoice());
        roundTotal++;
        if (roundTotal === 5) { Score(); }
    })
    
    mainDiv.appendChild(scissorsBtn);
}


playGame();