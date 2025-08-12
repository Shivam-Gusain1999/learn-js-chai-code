const form = document.querySelector('form');
const inputguess = document.querySelector('#guess');
const feedback = document.querySelector('.feedback');
const yourNo = document.querySelector('.yourno');
const previousDisplay = document.querySelector('.previousguess');
const remainingDisplay = document.querySelector('.remainingguess');
const newGameBtn = document.querySelector('#newgame');
const totalAttemptsSpan = document.querySelector('.total');
const attemptsLeftSpan = document.querySelector('.left');
const allGuessesSpan = document.querySelector('.all-guesses');

let randomNumber;
let remainingGuess;
let previousGuesses = [];

function initGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1); // 1 to 100
  remainingGuess = 10;
  previousGuesses = [];

  inputguess.disabled = false;
  form.querySelector('button').disabled = false;
  newGameBtn.style.display = 'none';

  feedback.innerHTML = '';
  yourNo.innerHTML = '';
  previousDisplay.innerHTML = '';
  remainingDisplay.innerHTML = 'Remaining guesses: 10';
  inputguess.value = '';

  totalAttemptsSpan.textContent = 10;
  attemptsLeftSpan.textContent = 10;
  allGuessesSpan.textContent = 'None';
}

function checkGuess(e) {
  e.preventDefault();

  const userGuess = parseInt(inputguess.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.innerHTML = "⚠️ Enter a valid number (1-100)";
    return;
  }

  if (remainingGuess === 0) return;

  previousGuesses.push(userGuess);
  remainingGuess--;

  yourNo.innerHTML = `Your number: ${userGuess}`;
  previousDisplay.innerHTML = `Previous guesses: ${previousGuesses.join(', ')}`;
  remainingDisplay.innerHTML = `Remaining guesses: ${remainingGuess}`;
  attemptsLeftSpan.textContent = remainingGuess;
  allGuessesSpan.textContent = previousGuesses.join(', ');

  if (userGuess === randomNumber) {
    feedback.innerHTML = `🎉 Correct! The number was ${randomNumber}. You win!`;
    endGame();
  } else if (remainingGuess === 0) {
    feedback.innerHTML = `❌ Game Over! The number was ${randomNumber}.`;
    endGame();
  } else if (userGuess < randomNumber) {
    feedback.innerHTML = "📉 Too low!";
  } else {
    feedback.innerHTML = "📈 Too high!";
  }

  inputguess.value = '';
}

function endGame() {
  inputguess.disabled = true;
  form.querySelector('button').disabled = true;
  newGameBtn.style.display = 'inline-block';
}

form.addEventListener('submit', checkGuess);
newGameBtn.addEventListener('click', initGame);

// Start first time
initGame();
