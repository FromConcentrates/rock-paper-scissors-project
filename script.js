console.log("Hello World")

/* Create a function named getComputerChoice
getComputerChoice will randomly return one of the following
values: "rock," "paper," or "scissors"

Function is named getComputerChoice
Parameter of the function is "turn"
Turn is equal to Math.random(), which returns a random number between 0 and 1.
If turn is greater than or equal to zero but less than one third, return rock
If turn is greater than or equal to one third, but less than two thirds, return paper
If turn is greater than or equal to two thirds, but less than or equal to 1, return scissors
Else, return "error"
*/


function getComputerChoice(turn) {
    turn = Math.random()
    if (turn < .5) console.log(('rock'))
        else alert('no')
}


getComputerChoice();