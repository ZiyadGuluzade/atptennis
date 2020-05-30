// selecting all cards
const cards = document.querySelectorAll('.player-card');

// storing cards
let cardIsFlipped = false;
let firstCard;
let secondCard;

// creating event listener
function flipTheCard() {
  this.classList.add('flip');

  if(!cardIsFlipped) {
    // first click
    cardIsFlipped = true;
    firstCard = this;
    return;
  }
    // second click
    cardIsFlipped = false;
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
}

// flips cards back if they don't match
function flipBacktheCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 900);
}

// add event listener to every card
cards.forEach(card => card.addEventListener('click', flipTheCard));