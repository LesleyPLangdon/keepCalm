const compChoiceDisplay = document.getElementById('compChoice');
const userChoiceDisplay = document.getElementById('userChoice');
const displayResult = document.getElementById('result');

//const posChoices = document.querySelectorAll('button');
//let posChoice;

let compChoice;
let userChoice;
let result;

// posChoices.forEach(posChoice => posChoice.addEventListener('click', (e) => {
//   userChoice = e.target.id;
//   userChoiceDisplay.innerHTML = userChoice;
//   generateComputerChoice();
//   getResult();
// }));
function playGame (userChoice) {
  userChoiceDisplay.innerHTML = userChoice;
   generateComputerChoice();
   getResult(userChoice);
}

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    compChoice = 'rock'
  }
  if (randomNumber === 1) {
    compChoice = 'paper'
  }
  if (randomNumber === 2) {
    compChoice = 'scissors'
  }
  compChoiceDisplay.innerHTML = compChoice;
}

function getResult(userChoice) {
  if (compChoice === userChoice) {
    result = "it's a tie!"
  }
  if (compChoice === 'rock' && userChoice === 'paper') {
    result = "you win!"
  }
  if (compChoice === 'rock' && userChoice === 'scissors') {
    result = "you lose!"
  }
  if (compChoice === 'paper' && userChoice === 'rock') {
    result = "you lose!"
  }
  if (compChoice === 'paper' && userChoice === 'scissors') {
    result = "you win!"
  }
  if (compChoice === 'scissors' && userChoice === 'rock') {
    result = "you win!"
  }
  if (compChoice === 'scissors' && userChoice === 'paper') {
    result = "you lose!"
  }
  displayResult.innerHTML = result;
}