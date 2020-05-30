
// selecting all cards
const cards = document.querySelectorAll('.player-card');

// storing cards
let cardIsFlipped = false;
let firstCard;
let secondCard;
let boardLock = false;

// creating event listener
function flipTheCard() {
  if(boardLock) return;
  this.classList.add('flip');

  if(!cardIsFlipped) {
    // first click
    cardIsFlipped = true;
    firstCard = this;
    return;
  }
    // second click
    secondCard = this;
  
  // checking if the cards match
  matchCheck();
} 

// checks if card do or don't match
function matchCheck() {
  return firstCard.dataset.player === secondCard.dataset.player ? disableMatchingCards() : flipBacktheCards();
}

// disables cards if they match
function disableMatchingCards() {
  firstCard.removeEventListener('click', flipTheCard);
  secondCard.removeEventListener('click', flipTheCard);
  reset();
}

// flips cards back if they don't match
function flipBacktheCards() {
  boardLock = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    reset();
  }, 900);
}

function reset() {
  [cardIsFlipped, boardLock] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// immediately assign a random number to every card
(function shuffle() {
  cards.forEach(card => {
    let random = Math.floor(Math.random() * 30);
    card.style.order = random;
  })
})();

// add event listener to every card
cards.forEach(card => card.addEventListener('click', flipTheCard));