'use strict';

let generatednumber = Math.trunc(Math.random() * 20) + 1;
console.log(generatednumber);

let score = 20;
let highscore = 0;
console.log('Git maintenance');

const checkbtn = document.querySelector('.check');
const restart = document.querySelector('.buttonrestart');

checkbtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (guess == '') {
    document.querySelector('.message').textContent = 'No values from user';
  } else if (guess > generatednumber) {
    document.querySelector('.message').textContent = 'Too big';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } else if (guess < generatednumber) {
    document.querySelector('.message').textContent = 'Too low';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You win';
    document.querySelector('.number').textContent = guess;
    document.querySelector('.number').classList.add('.adding');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

restart.addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  generatednumber = Math.trunc(Math.random() * 20) + 1;
});
