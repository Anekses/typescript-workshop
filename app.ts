const suits = ["hearts", "spades", "clubs", "diamonds"];
const cardNumber = 10;
const cardObject = { suit: "spades", card: 12 };
const cardSuit = "clubs";

const pickRandomCard = () => {
    return Math.ceil(Math.random() * 13);
}

const pickRandomSuit = () => {
    return Math.ceil(Math.random() * suits.length);
}

const displayAllPickedCards = (array) => {
    array.forEach(element => {
        console.log("card: " + element.card + " of " + element.suit);
    });
}

let pickedCards = [];

//funkcje nadające wartości pickedCards[0],[1],[2];

displayAllPickedCards(pickedCards);