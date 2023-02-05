// const rockBtn = document.getElementById('rock')
// const paperBtn = document.getElementById('paper')
// const scissorsBtn = document.getElementById('scissors')
const btn = document.querySelectorAll('button')
const resultMessage = document.getElementById('round-result')

let options = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;
let roundWinner = ''

//work on this random choice function
function getComputerChoice(arr) {
    let random = Math.floor(Math.random() * arr.length)
    return arr[random]
}


//write a function to handle playerchoice
function playerChoice() {
    btn.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(button.value)
            return button.value
        })
    })
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

const playerSelection = playerChoice()
const computerSelection = getComputerChoice(options)
console.log(playround(playerSelection, computerSelection))




//figure out how to create the rounds --- done
function game(playerSelection, computerSelection) {
    //write code to loop 5 times to make a round --- done
    //if the playerScore > computerScore declare player the winner else the computer --- done 
    let i = 0
    do {
        let playerSelection = playerChoice()
        const computerSelection = getComputerChoice(options)
        if (roundWinner === 'computer wins!') {
            playerScore++
        } else if (roundWinner === 'player wins!') {
            computerScore++
        }
        playround(playerSelection, computerSelection)
        i++;
    }
    while (i < 5)
    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)
    if (playerScore > computerScore) {
        console.log('The player wins this round!')
        resultMessage.innerHTML = 'The player wins this round!'
    } else if (computerScore > playerScore) {
        console.log('Ai is taking over very soon 🙂')
        resultMessage.innerHTML = 'Ai is taking over very soon 🙂'
    } else if (computerScore === playerScore) {
        console.log('Tie 👔')
        resultMessage.innerHTML = "It's a Tie 👔"
    }
}
game(playerSelection, computerSelection)
