'use strict';

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function guessingGameBot(guessedNumber) {
  let countdown = 10;

  function guessingAttempt() {
    const userNumber = prompt('Угадай число от 1 до 100');

    if (userNumber === null) {
      alert('Игра окончена...');
      return;
    } else if (!isNumber(userNumber)) {
      alert('Введи число!');
    } else countdown--;

    if (+userNumber === guessedNumber) {
      if (!confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
        alert('Игра окончена...');
        return;
      }
    } else if (+userNumber > guessedNumber) {
      alert('Загаданное число меньше, осталось попыток: ' + countdown);
    } else if (+userNumber < guessedNumber) {
      alert('Загаданное число больше, осталось попыток: ' + countdown);
    }

    if (countdown === 0) {
      if (!confirm('Попытки закончились, хотите сыграть еще?')) {
        alert('Игра окончена...');
        return;
      }
    }

    guessingAttempt();
  }

  guessingAttempt();
}

let number = Math.floor(Math.random() * 100);
guessingGameBot(number);

console.log(number);