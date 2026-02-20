console.log("Hello World")

/* Create a function named getComputerChoice
getComputerChoice will randomly return one of the following
values: "rock," "paper," or "scissors"

Function is named getComputerChoice
Parameter of the function is "turn"
Turn is equal to Math.random(), which returns a random number between 0 and 1.
If turn is greater than or equal to zero but less than one third, return rock
Else If turn is greater than or equal to one third, but less than two thirds, return paper
Else If If turn is greater than or equal to two thirds, but less than or equal to 1, return scissors
*/

function getComputerChoice(turn) {
    turn = Math.random();
    if (turn < (1/3)) { // removed redundant condition (turn >= 0) since Math.random() never returns a negative number
        console.log('rock');
    } else if (turn < (2/3)) {
        console.log('paper');
// Else if with conditions isn't necessary here because it's the only other option
    } else {
        console.log('scissors'); 
    }
}



getComputerChoice();