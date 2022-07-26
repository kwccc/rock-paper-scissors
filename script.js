const options = ['ROCK', 'PAPER', 'SCISSORS']
let win = 0
let loss = 0

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)]
}

function getPlayerChoice() {
    const playerSelection = prompt('Rock, Paper or Scissors?').toUpperCase()
    return playerSelection
}

function playRound(playerSelection, computerSelection) {
    // console.log(playerSelection)
    // console.log(computerSelection)

    if (playerSelection === computerSelection) return 'Draw!'

    switch (playerSelection) {
        case 'ROCK':
            if (computerSelection === 'PAPER') {
                loss++
                return 'You Lose! Paper beats Rock'
            } else if (computerSelection === 'SCISSORS') {
                win++
                return 'You Win! Rock beats Scissors'
            }
            break
        case 'PAPER':
            if (computerSelection === 'SCISSORS') {
                loss++
                return 'You Lose! Scissors beats Paper'
            } else if (computerSelection === 'ROCK') {
                win++
                return 'You Win! Paper beats Rock'
            }
            break
        case 'SCISSORS':
            if (computerSelection === 'ROCK') {
                loss++
                return 'You Lose! Rock beats Scissors'
            } else if (computerSelection === 'Paper') {
                win++
                return 'You Win! Scissors beats PAPER'
            }
            break
        default:
            return 'Invalid choice!'
    } 
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getPlayerChoice(), getComputerChoice()))
    }

    if (win > loss) {
        console.log('You WIN! ' + win + '-' + loss)
    } else if (loss > win) {
        console.log('You LOSE! ' + win + '-' + loss)
    } else {
        console.log('DRAW! ' + win + '-' + loss)
    }
}

// console.log(playRound(getPlayerChoice(), getComputerChoice()))
game()