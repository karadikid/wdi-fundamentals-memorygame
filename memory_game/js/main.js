
const cards = ['queen','queen','king','king'];
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
    cardOne = cards[cardId];
    cardsInPlay.push(cardOne);
    cardId = Math.floor((Math.random() * 4) +1);
    cardTwo = cards[cardId];
    cardsInPlay.push(cardTwo);
    console.log("User flipped " + cards[cardId]);
    checkForMatch();
}

cardId = Math.floor((Math.random() * 4) +1);
console.log(cardId);
flipCard(cardId);






