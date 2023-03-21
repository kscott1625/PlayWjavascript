let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';

let messageEl = document.getElementById('message-el');

let sumEl = document.getElementById('sum-el');
console.log(sumEl);

let cardsEl = document.getElementById('cards-el');

let player = {
  name: 'Kat',
  chips: 145
};

let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ': $' + player.chips;
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  sumEl.textContent = 'Sum: ' + sum;
  cardsEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + '';
  }

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
  if (isAlive === true && hasBlackjack === false) console.log('new card');
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}

let hands = ['rock', 'paper', 'scissor'];

function newHands() {
  let randomHand = Math.floor(Math.random() * 3);
  return hands[randomHand];
}
console.log(newHands());
