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
        console.log('Paper covers rock; the Human wins!');
        ++humanScore;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('Rock crushes scissors; the Human wins!');
        ++humanScore;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('Scissors cut paper; the Human wins!');
        ++humanScore;
    }
    else if (computerChoice === 'paper' && humanChoice === 'rock') {
        console.log('Paper covers rock; the Computer wins!');
        ++computerScore;
    }
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        console.log('Rock crushes scissors; the Computer wins!');
        ++computerScore;
    }
    else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log ('Scissors cut paper; the Computer wins!');
        ++computerScore;
    }
    else { console.log('This round is a tie');
    }
    }
    

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


/* Step 5: Write the logic to play a single round
Your game will be played round by round. You will write a function that takes
the human and computer player choices as arguments, plays a single round, increments the round 
 winner’s score and logs a winner announcement.

Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to
take the human and computer choices as arguments.
Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”,
or other variations.
Write the code for your playRound function to console.log a string value representing the round winner,
Such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner. 

Pseudocode: 
The game is played in rounds. 
The human and the computer each play a choice as arguments. This is a single round.
The round winner's score (variable) is incremented
A winner's accouncement is logged to the console

If the computer wins the round, the computer's score is incremented by one
Else if the human wins the round, the human's score is incremented by one
Else the round is a tie and neither score is incremented by one.
*/


