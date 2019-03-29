var suits = ["hearts", "spades", "clubs", "diamonds"];
var cardNumber = 10;
var cardObject = { suit: "spades", card: 12 };
var cardSuit = "clubs";
var pickRandomCard = function () {
    return Math.ceil(Math.random() * 13);
};
var pickRandomSuit = function () {
    return Math.ceil(Math.random() * suits.length);
};
var displayAllPickedCards = function (array) {
    array.forEach(function (element) {
        console.log("card: " + element.card + " of " + element.suit);
    });
};
var pickedCards = [];
//funkcje nadające wartości pickedCards[0],[1],[2];
displayAllPickedCards(pickedCards);
