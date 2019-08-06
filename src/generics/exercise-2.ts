/*
Otypuj poprawnie funkcję map
Przyjmuje ona tablicę i funkcję, którą ma wykonać dla każdego elementu tablicy
Sprawdź czy typescript akceptuje wyrażenia w części CHECK
 */

function map<T, U>(arr: T[], f: (e: T) => U): U[] {
    return arr.map(f);
}

// CHECK
const numbers = [1, 2, 3];
const strings = map(numbers, num => num.toLocaleString());
strings[0].toUpperCase();

