// const rockBtn = document.getElementById('rock')
// const paperBtn = document.getElementById('paper')
// const scissorsBtn = document.getElementById('scissors')
const btn = document.querySelectorAll('button')
const resultMessage = document.getElementById('round-result')
const playerResult = document.getElementById('player-score')
const computerResult = document.getElementById('computer-score')

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
btn.forEach(button => { button.addEventListener('click', playerChoice) })


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


let playerSelection;

function playGame() {
    if (roundWinner === 'computer wins!') {
        playerScore++
        playerResult.innerHTML = playerScore;
        console.log(`player: ${playerScore}`)
    } else if (roundWinner === 'player wins!') {
        computerScore++
        computerResult.innerHTML = computerScore;
        console.log(`computer: ${computerScore}`)
    }
}
playGame()
// let computerSelection = getComputerChoice(options)
// console.log(playround(playerSelection, computerSelection))

// playGame(playerSelection, computerSelection)

function roundScore() {
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
roundScore()

function playerChoice(e) {
    let playerSelection= (e.target.id);
    playerChoice = e.target.textContent;
    playround(playerSelection, getComputerChoice(options));
}


//need to loose the loop and try again
// function game(playerSelection, computerSelection) {
//     let i = 0
//     do {
//         const playerSelection = playerChoice()
//         const computerSelection = getComputerChoice(options)

//         if (roundWinner === 'computer wins!') {
//             playerScore++
//         } else if (roundWinner === 'player wins!') {
//             computerScore++
//         }
//         playround(playerSelection, computerSelection)
//         i++;
//     }
//     while (i < 5)
//     if (playerScore > computerScore) {
//         console.log('The player wins this round!')
//         resultMessage.innerHTML = 'The player wins this round!'
//     } else if (computerScore > playerScore) {
//         console.log('Ai is taking over very soon 🙂')
//         resultMessage.innerHTML = 'Ai is taking over very soon 🙂'
//     } else if (computerScore === playerScore) {
//         console.log('Tie 👔')
//         resultMessage.innerHTML = "It's a Tie 👔"
//     }
// }
// game(playerSelection, computerSelection)
