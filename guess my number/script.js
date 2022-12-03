'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message');
document.querySelector('.number');
document.querySelector('.score').textContent;
document.querySelector('.guess').value = 5;
*/
const check = function (inp) {
  return Number(inp) === num;
};

let score = 20,
  highScore = 0;
let num = Math.trunc(Math.random() * 20 + 1);
let gameOver = false;

//when playing game
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, gameOver);
  if (!gameOver) {
    if (score === 0) {
      document.querySelector('.message').textContent = 'You lost!';
      gameOver = true;
    }
    if (check(guess)) {
      document.querySelector('.message').textContent = 'Correct! You won.';
      gameOver = true;
      document.querySelector('.number').textContent = num;
      document.querySelector('body').style.backgroundColor = 'green';

      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess < num) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess > num) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

//when playing again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  num = Math.trunc(Math.random() * 20 + 1);
  gameOver = false;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = 0;
  document.querySelector('.number').textContent = '?';
});
