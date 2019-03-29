const suits = ["hearts", "spades", "clubs", "diamonds"];
const cardNumber = 10;
const cardObject = { suit: "spades", card: 12 };
const cardSuit = "clubs";

const pickRandomCard = (): number => {
    return Math.ceil(Math.random() * 13 + 1);
}

const pickRandomSuit = (): string => {
    return suits[Math.ceil(Math.random() * suits.length - 1)];
}

const displayAllPickedCards = (array: {suit: string; card: number; }[]): void => {
    array.forEach(element => {
        console.log("card: " + element.card + " of " + element.suit);
    });
}

function pickCard(x: {suit: string; card: number; }): {suit: string; card: number; };
function pickCard(x: string): {suit: string; card: number; };
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    if (typeof x == "string") {
        const pickedCard: number = pickRandomCard();
        const pickedSuit: string = x;
        return { suit: pickedSuit, card: pickedCard };
    }
    if (typeof x == "object") {
        return x;
    }
    else if (typeof x == "number") {
        const pickedCard: number = x % 13;
        const pickedSuit: string = pickRandomSuit();
        return { suit: pickedSuit, card: pickedCard };
    }
}

let pickedCards: {suit: string; card: number; }[] = [];
pickedCards.push(pickCard(cardNumber));
pickedCards.push(pickCard(cardObject));
pickedCards.push(pickCard(cardSuit));

displayAllPickedCards(pickedCards);