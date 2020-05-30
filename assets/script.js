// selecting all cards
const cards = document.querySelectorAll('.player-card');

// storing cards
let flipped = false;
let firstCard;
let secondCard;

// creating event listener
function flipTheCard() {
  this.classList.add('flip');

  if(!flipped) {
    // first click
    flipped = true;
    firstCard = this;
  } else {
    // second click
    flipped = false;
    secondCard = this;
  }

  // matching the cards
  if(firstCard.dataset.player === secondCard.dataset.player) {
    // matching cards  
    firstCard.removeEventListener('click', flipTheCard);
    secondCard.removeEventListener('click', flipTheCard);
  } else {
    // remove 'flip' class if cards don't match
    setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 500);
}
}
// add event listener to every card
cards.forEach(card => card.addEventListener('click', flipTheCard));