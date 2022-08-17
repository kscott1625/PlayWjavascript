let firstCard = 7;
let secondCard = 9;
let hasBlackjack = false;
let isAlive = true;
let message = '';

let messageEl = document.getElementById('message-el');
console.log(messageEl);

let sum = firstCard + secondCard;

function startGame() {
  if (sum <= 20) {
    message = 'Another card?';
  } else if (sum === 21) {
    message = 'Blackjack';
    hasBlackjack = true;
  } else {
    message = 'You Lose';
    isAlive = false;
  }
  messageEl.textContent = message;
}
