/*
Otypuj poprawnie funkcję id, która zwraca swój argument
Sprawdź czy typescript akceptuje wyrażenia w części CHECK
Dlaczego wrongId jest niepoprawne?
 */

function wrongId(a: unknown): unknown {
    return a;
}

// TODO
function id(a) {
    return a;
}

// CHECK
id(123).toFixed();
id({ a: 1 }).a;


