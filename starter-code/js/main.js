var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


var gameBoard = document.getElementById('game-board');

var createBoard = function() {

	for (var i = 0; i < cards.length; i++) {
		var cardDiv = document.createElement('div');

		cardDiv.className = 'card';
		cardDiv.setAttribute('data-card', cards[i]);
		cardDiv.addEventListener('click', isTwoCards);

		gameBoard.appendChild(cardDiv);
		}
};

var isMatch = function(card) {
	if (card[0] === card[1]) {
		alert("You found a match!");
	} else {
		alert("Try again!");
	}

	for (var i = 0; i < cards.length; i++) {
		document.getElementsByClassName('card')[i].innerHTML = " ";
	}
}


var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='/Users/zuspadt/fundamentals/wdi-fundamentals-memorygame/starter-code/images/king_of_spades.png'' alt='King of Spades'/>";
	} else {
		this.innerHTML = "<img src='/Users/zuspadt/fundamentals/wdi-fundamentals-memorygame/starter-code/images/queen_of_hearts.png' alt='Queen of Hearts'/>";
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

createBoard();
