
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
function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]){
        console.log("You found a match!");
    } else {
        console.log("Sorry try again.");
    }
}

function flipCard(cardId){
    cardOne = cards[cardId].rank;
    cardsInPlay.push(cardOne);
    cardId = Math.floor((Math.random() * (3 - 0)) +0);
    cardTwo = cards[cardId].rank;
    cardsInPlay.push(cardTwo);
    console.log("User flipped " + cards[cardId].rank);
    checkForMatch();
}

cardId = Math.floor((Math.random() * 4) +1);
console.log(cardId);
flipCard(cardId);






