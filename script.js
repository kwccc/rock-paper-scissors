let win = 0
let loss = 0

const winCounter = document.querySelector('.winCounter')
const lossCounter = document.querySelector('.lossCounter')
const message = document.querySelector('.message')
const playerChoice = document.querySelector('.playerChoice')
const computerChoice = document.querySelector('.computerChoice')
const playerChoiceImage = document.querySelector('.playerChoiceImage')
const computerChoiceImage = document.querySelector('.computerChoiceImage')

function getComputerChoice() {
  const options = ['Rock', 'Paper', 'Scissors']
  return options[Math.floor(Math.random() * 3)]
}

function playRound(e) {
  if (win === 5 || loss === 5) return
  
  const playerSelection = this.id
  const computerSelection = getComputerChoice()

  playerChoiceImage.src = `./images/${playerSelection}.png`
  playerChoiceImage.style.display = 'block'
  computerChoiceImage.src = `./images/${computerSelection}.png`
  computerChoiceImage.style.display = 'block'


  if (playerSelection === computerSelection) {
    message.textContent = `Draw! You both chose ${playerSelection}`
    return
  }

  if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
      playerSelection === 'Scissors' && computerSelection === 'Paper' ||
      playerSelection === 'Paper' && computerSelection === 'Rock') {
    win++
    winCounter.textContent = win
    message.textContent = `Win! ${playerSelection} beats ${computerSelection}.`
  } else {
    loss++
    lossCounter.textContent = loss
    message.textContent = `Loss! ${computerSelection} beats ${playerSelection}.`
  }

  checkScore()
}

function checkScore() {
  if (win === 5 || loss === 5) {
    if (win === 5) {
      message.textContent = `You WIN! CONGRATULATIONS!`
      winnerScoreStyle(winCounter)
    } else if (loss === 5) {
      message.textContent = `You LOSE! Better luck next time!`
      winnerScoreStyle(lossCounter)
    }
  }
}

function resetScores() {
  win = 0
  loss = 0
  resetScoreStyle(winCounter)
  resetScoreStyle(lossCounter)
  message.textContent = 'First to 5 points wins!'
  playerChoiceImage.style.display = 'none'
  computerChoiceImage.style.display = 'none'
}

function winnerScoreStyle(score) {
  score.style.fontSize = '2.5em'
  if (score === lossCounter) {
    score.style.color = 'crimson'
  } else {
    score.style.color = 'cornflowerblue'
  }
}

function resetScoreStyle(score) {
  score.textContent = 0
  score.style.color = ''
  score.style.fontSize = ''
}

const btns = document.querySelectorAll('.buttons')
btns.forEach(btn => btn.addEventListener('click', playRound))

const reset = document.querySelector('#newGame')
reset.addEventListener('click', resetScores)