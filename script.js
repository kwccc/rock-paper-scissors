let win = 0
let loss = 0
let draw = 0

const winCounter = document.querySelector('.winCounter')
const drawCounter = document.querySelector('.drawCounter')
const lossCounter = document.querySelector('.lossCounter')
const message = document.querySelector('.message')

function getComputerChoice() {
  const options = ['ROCK', 'PAPER', 'SCISSORS']
  return options[Math.floor(Math.random() * 3)]
}

function playRound(e) {
  if (win === 5 || loss === 5) return

  const playerSelection = this.textContent.toUpperCase()
  const computerSelection = getComputerChoice()

  if (playerSelection === computerSelection) {
    draw++
    drawCounter.textContent = draw
    message.textContent += `\nDraw! You both chose ${playerSelection}`
    return
  }

  if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' ||
      playerSelection === 'SCISSORS' && computerSelection === 'PAPER' ||
      playerSelection === 'PAPER' && computerSelection === 'ROCK') {
    win++
    winCounter.textContent = win
    message.textContent += `\nYour ${playerSelection} beats the computer's ${computerSelection}`
  } else {
    loss++
    lossCounter.textContent = loss
    message.textContent += `\nYour ${playerSelection} was beaten by the computer's ${computerSelection}`
  }

  checkScore()
}

function checkScore() {
  if (win === 5 || loss === 5) {
    if (win === 5) {
      message.textContent += `\nYou WIN! ${win} - ${loss}`
    } else if (loss === 5) {
      message.textContent += `\nYou LOSE! ${win} - ${loss}`
    }
  }
}

function resetScores() {
  win = 0
  loss = 0
  draw = 0
  winCounter.textContent = 0
  lossCounter.textContent = 0
  drawCounter.textContent = 0
  message.textContent = ''
}

const btns = document.querySelectorAll('button')
btns.forEach(btn => btn.addEventListener('click', playRound))

const reset = document.querySelector('#newGame')
reset.addEventListener('click', resetScores)