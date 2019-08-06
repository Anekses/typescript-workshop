/*
Napisz i optypuj funkcję doublePrice
Przyjmuje ona obiekt z ceną i zwraca ten sam obiekt z podwojoną ceną
Użyj interface'u WithPrice
Sprawdź czy typescript akceptuje wyrażenia w części CHECK
 */

interface WithPrice {
    price: number;
}

function getPrice<T extends WithPrice>(o: T): number {
    return o.price;
}

getPrice({ name: 'foobar', price: 100 });


// TODO
function doublePrice(o) {
}

// CHECK
doublePrice({ name: 'oil', price: 100 }).name;
console.log(doublePrice({ name: 'oil', price: 100 }).price === 200);

