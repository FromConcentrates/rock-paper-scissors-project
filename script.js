/* Create a function named getComputerChoice
getComputerChoice will randomly return one of the following
values: "rock," "paper," or "scissors"

Function is named getComputerChoice
Local variable of the function is "turn"
Turn is equal to Math.random(), which returns a random number between 0 and 1.
If turn is greater than or equal to zero but less than one third, return rock
Else If turn is greater than or equal to one third, but less than two thirds, return paper
Else If If turn is greater than or equal to two thirds, but less than or equal to 1, return scissors
*/

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
getComputerChoice();

/*Step 3: Write the logic to get the human choice
Your game will be played by a human player. You will write a function that takes the user choice and returns it.

The function is named getHumanChoice
The function is a prompt with the format result = prompt(title, [default]);
The function will return a 'choice' depending on user input of 'rock', 'paper' or 'scissors'
The title is a greeting to the user, and the default will include 'rock,' 'paper,' or 'scissors'
*/

function getHumanChoice() {
    choice = prompt("Do you choose Rock, Paper, or Scissors?", 'Ex: Scissors');
    return choice;

}

/*Step 4: Declare the players score variables
Your game will keep track of the players score. You will write variables to keep track of the players score.

Create two new variables named humanScore and computerScore in the global scope.
Initialize those variables with the value of 0. */

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice ==='paper' && computerChoice ==='rock') {
        mainDiv.textContent = 'Paper covers rock; the Human wins!';
        ++humanScore;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        mainDiv.textContent ='Rock crushes scissors; the Human wins!';
        ++humanScore;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        mainDiv.textContent = 'Scissors cut paper; the Human wins!';
        ++humanScore;
    }
    else if (computerChoice === 'paper' && humanChoice === 'rock') {
        mainDiv.textContent = 'Paper covers rock; the Computer wins!';
        ++computerScore;
    }
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        mainDiv.textContent = 'Rock crushes scissors; the Computer wins!';
        ++computerScore;
    }
    else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        mainDiv.textContent = 'Scissors cut paper; the Computer wins!';
        ++computerScore;
    }
    else { mainDiv.textContent = 'This round is a tie';
    }
    }
    


const mainDiv = document.querySelector("div");

    function Score() {
            if (humanScore > computerScore) {
        mainDiv.textContent = 'The human wins!';
    }
    else if (computerScore > humanScore) {
        mainDiv.textContent = 'The computer wins!';
    }
    else {
        mainDiv.textContent = 'It is a tie';}
    } 

function playGame() {
/*
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    /*round1 = playRound(humanSelection, computerSelection);

    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    round2 = playRound(humanSelection2, computerSelection2);

    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    round3 = playRound(humanSelection3, computerSelection3);

    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    round4 = playRound(humanSelection4, computerSelection4);

    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    round5 = playRound(humanSelection5, computerSelection5);
*/
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorsBtn = document.createElement("button");

    rockBtn.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
    Score(); 
    } )

    mainDiv.appendChild(rockBtn);

    paperBtn.addEventListener('click', function() {
        playRound('paper', getComputerChoice());
        Score();
    })

    mainDiv.appendChild(paperBtn);

    scissorsBtn.addEventListener('click', function() {
        playRound('scissors', getComputerChoice());
        Score();
    })

    mainDiv.appendChild(scissorsBtn);
}

playGame();