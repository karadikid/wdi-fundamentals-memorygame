
var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

const cardsInPlay = [];




/*Function for flipping card
Step 1 Select card + push onto array
Step 2 Select card + push onto array
Step 3 Compare Array element for card one to array element for card two and log output
*/

function createBoard(){
    for (var i=0; i < cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src',"images/back.png");
        cardElement.setAttribute('data-id',i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]){
        console.log("You found a match!");
    } else {
        console.log("Sorry try again.");
    }
}

function flipCard(){
    var cardId = this.getElementById('data-id');
    cardOne = cards[cardId].rank;
    cardsInPlay.push(cardOne);
    cardTwo = cards[cardId].rank;
    cardsInPlay.push(cardTwo);
    console.log("User flipped " + cards[cardId].rank);
    checkForMatch();
}


createBoard();





