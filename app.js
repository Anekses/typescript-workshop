var suits = ["hearts", "spades", "clubs", "diamonds"];
var cardNumber = 10;
var cardObject = { suit: "spades", card: 12 };
var cardSuit = "clubs";
var pickRandomCard = function () {
    return Math.ceil(Math.random() * 13 + 1);
};
var pickRandomSuit = function () {
    return suits[Math.ceil(Math.random() * suits.length - 1)];
};
var displayAllPickedCards = function (array) {
    array.forEach(function (element) {
        console.log("card: " + element.card + " of " + element.suit);
    });
};
function pickCard(x) {
    if (typeof x == "string") {
        var pickedCard = pickRandomCard();
        var pickedSuit = x;
        return { suit: pickedSuit, card: pickedCard };
    }
    if (typeof x == "object") {
        return x;
    }
    else if (typeof x == "number") {
        var pickedCard = x % 13;
        var pickedSuit = pickRandomSuit();
        return { suit: pickedSuit, card: pickedCard };
    }
}
var pickedCards = [];
pickedCards.push(pickCard(cardNumber));
pickedCards.push(pickCard(cardObject));
pickedCards.push(pickCard(cardSuit));
displayAllPickedCards(pickedCards);
