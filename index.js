// const rockBtn = document.getElementById('rock')
// const paperBtn = document.getElementById('paper')
// const scissorsBtn = document.getElementById('scissors')
const btn = document.querySelectorAll('button')
const resultMessage = document.getElementById('round-result')
const playerResult = document.getElementById('player-score')
const computerResult = document.getElementById('computer-score')
const player_choice = document.getElementById('player-choice')

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
        player_choice.innerHTML = roundWinner
        console.log(roundWinner)
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++
        roundWinner = 'player wins!'
        player_choice.innerHTML = roundWinner
        console.log(roundWinner)
        console.log(`player-score: ${playerScore}`)
        playerResult.innerHTML = `<p>You: ${playerScore}</p>`
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        computerScore++
        roundWinner = 'computer wins!'
        player_choice.innerHTML = roundWinner
        console.log(roundWinner)
        console.log(`computer-score: ${computerScore}`)
        computerResult.innerHTML = `<p>Computer: ${computerScore}</p>`
    }
}


let playerSelection;

// let computerSelection = getComputerChoice(options)
// console.log(playround(playerSelection, computerSelection))

// playGame(playerSelection, computerSelection)

function roundScore() {
    if (computerScore === 5 || playerChoice === 5) {
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
}

function playerChoice(e) {
    let playerSelection = (e.target.id);
    playerChoice = e.target.textContent;
    playround(playerSelection, getComputerChoice(options));
    roundScore()
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
