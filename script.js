console.log("Hello World")

/* Create a function named getComputerChoice
getComputerChoice will randomly return one of the following
values: "rock," "paper," or "scissors"
*/




function getComputerChoice(play) {
    play = Math.random()
    if (play < .5) console.log(('rock'))
        else alert('no')
}


getComputerChoice();