'use strict';

let checkBtn = document.querySelector('.button');

let userAnswer = document.querySelector('.answer');

let rightAnswers = document.querySelector('.right__answers');
let wrongAnswers = document.querySelector('.wrong__answers');
let rightAnswersCount = 0;
let wrongAnswersCount = 0;
rightAnswers.innerHTML = rightAnswersCount;
wrongAnswers.innerHTML = wrongAnswersCount;

let leftNumber = document.querySelector('.left-number');
let rightNumber = document.querySelector('.right-number');
let leftRandomNumber = Math.round(1 + Math.random() * (8 + 1 - 1));
let rightRandomNumber = Math.round(1 + Math.random() * (8 + 1 - 1));
leftNumber.innerHTML = leftRandomNumber;
rightNumber.innerHTML = rightRandomNumber;

const setRandomNumbers = () => {

  if ((leftRandomNumber * rightRandomNumber).toString() === userAnswer.value) {
    rightAnswersCount++;
    rightAnswers.innerHTML = rightAnswersCount;
  } else {
    wrongAnswersCount++;
    wrongAnswers.innerHTML = wrongAnswersCount;
  }
  leftRandomNumber = Math.round(1 + Math.random() * (8 + 1 - 1));
  rightRandomNumber = Math.round(1 + Math.random() * (8 + 1 - 1));
  leftNumber.innerHTML = leftRandomNumber;
  rightNumber.innerHTML = rightRandomNumber;

  userAnswer.value = '';
  userAnswer.focus();
};

checkBtn.addEventListener('click', () => {
  userAnswer.value !== '' ? setRandomNumbers() : '';
});

userAnswer.addEventListener('keyup', (e) => {
  e.keyCode === 13 && userAnswer.value !== '' ? setRandomNumbers() : '';
});
