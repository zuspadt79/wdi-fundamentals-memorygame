var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


// // if cards match or not, then console.log appropriate message
// if (cardOne === cardFour) {
// 	alert("You've found a match!")
// } 
// else{
// 	alert("Try again!")
// };

var createBoard = function() {

	var gameBoard = document.getElementById('game-board');

	var cards = 4;

	for (var i = 0; i < cards; i++) {
		var cardDiv = document.createElement('div');
		cardDiv.setAttribute('class', 'card');
		gameBoard.appendChild(cardDiv);

		}
};

// document.getElementById('game-board').addEventListener("click", createBoard);

createBoard();
