
const cards = ['queen','queen','king','king'];
const cardsInPlay = [];


/*Function for flipping card
Step 1 Select card + push onto array
Step 2 Select card + push onto array
Step 3 Compare Array element for card one to array element for card two and log output
*/

function flipCard(){
    cardOne = cards[0];
    cardsInPlay.push(cardOne);
    cardTwo = cards[1];
    cardsInPlay.push(cardTwo);
    if (cardsInPlay.length === 2)
    if (cardsInPlay[0] === cardsInPlay[1])
        alert("You found a match!");
    else
        alert('Sorry, try again');
}
console.log("User flipped " + cardsInPlay);



