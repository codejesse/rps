let options = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;
let roundWinner = ''

//work on this random choice function
function getComputerChoice(arr) {
    let random = Math.floor(Math.random() * arr.length)
    return arr[random]
}

function playround(playerSelection, computerSelection) {
    //work on it here
    console.log(`Player: ${playerSelection}`)
    console.log(`computer: ${computerSelection}`)
    if (playerSelection === computerSelection) {
        roundWinner = 'Tie'
        console.log(roundWinner)
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++
        roundWinner = 'player wins!'
        console.log(roundWinner)
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        computerScore++
        roundWinner = 'computer wins!'
        console.log(roundWinner)
    }
}

const playerSelection = prompt('Enter value')
const computerSelection = getComputerChoice(options)
console.log(playround(playerSelection, computerSelection))

//figure out how to create the rounds
function game(playerSelection, computerSelection) {
    //write code to loop 5 times to make a round 
    //if the playerScore > computerScore declare player the winner else the computer
    let i = 0
    do {
        const playerSelection = prompt('Enter value')
        const computerSelection = getComputerChoice(options)
        playround(playerSelection, computerSelection)
        i++;
    }
    while (i < 5)
}
game(playerSelection, computerSelection)