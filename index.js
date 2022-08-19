let firstCard = 7;
let secondCard = 9;
let cards = [];
let hasBlackjack = false;
let isAlive = true;
let message = '';

let messageEl = document.getElementById('message-el');

let sumEl = document.getElementById('sum-el');
console.log(sumEl);

let cardsEl = document.getElementById('cards-el');
console.log(cardsEl);

let sum = firstCard + secondCard;

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = 'Sum: ' + sum;
  cardsEl.textContent = 'Cards: ' + cards[0] + '  ' + cards[1];
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

function newCard() {
  console.log('new card');
  let card = 4;
  sum += card;
  renderGame();
}
