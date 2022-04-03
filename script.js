'use strict';

//*************Declaring vars and functions****************************** */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

//**************WHEN PLEYER CLICK ChEcK BUTTON*************** */

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //***********************************checking if empty value

  if (!guess) {
    // ***************An empty value is filled with 0 (false)
    displayMessage('No number wrriten 🤔!!');

    //RIGHT NUMBER PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('🎉Right number 🎉!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  //**********************IF SCORE IS WRONG****************** */
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '⬆Too hight number ⬆!!' : '👎Too low number👎!!'
      );
      score--;
      setScore(score);
    } else {
      displayMessage('You lost the game 💥💥');
      setScore(0);
    }
  }
});

//************WHEN PLAYER CKICK AgAiN BUTTON*********** */

document.querySelector('.again').addEventListener('click', function () {
  //              **************SETTING STYLES ONCE A AGAIN****************************

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...!!');

  //************IF SCORE IS HIGHER THAN CURRENT HIGHSCORE***** */
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }

  //**************************SETTING ORIGINAL VALUES ****************************************** */
  score = 20;
  setScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
