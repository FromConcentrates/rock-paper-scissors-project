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

function getComputerChoice() {
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

/*Step 3: Write the logic to get the human choice
Your game will be played by a human player. You will write a function that takes the user choice and returns it.

Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
Hint: Use the prompt method to get the user’s input.
You do not need to handle reprompting if the user enters an invalid input, as that would require things we will teach later. For now, just assume the user will always enter a valid choice.
Test what your function returns by using console.log.

The function is named getHumanChoice
The function is a prompt with the format result = prompt(title, [default]);
The function will return a 'choice' depending on user input of 'rock', 'paper' or 'scissors'
The title is a greeting to the user, and the default will include 'rock,' 'paper,' or 'scissors'
*/

function getHumanChoice() {
    
}



