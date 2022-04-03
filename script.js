'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct number!!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// showing the secret number
//document.querySelector('.number').textContent = secretNumber;

//**************WHEN PLEYER CLICK ChEcK BUTTON*************** */

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //***********************************checking if empty value

  if (!guess) {
    // ***************an empty value is filled with 0 (false)

    document.querySelector('.message').textContent = 'No number wrriten 🤔!!';

    //RIGHT NUMBER PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Right number 🎉!!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  //**********************IF SCORE IS WRONG****************** */
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '⬆Too hight number ⬆!!' : '👎Too low number👎!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game 💥💥';
      document.querySelector('.score').textContent = 0;
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
  document.querySelector('.message').textContent = 'Start guessing...!!';
  //************IF SCORE IS HIGHER THAN CURRENT HIGHSCORE***** */
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }

  //**************************SETTING ORIGINAL VALUES ****************************************** */
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // showing the secret number
  //document.querySelector('.number').textContent = secretNumber;
});
