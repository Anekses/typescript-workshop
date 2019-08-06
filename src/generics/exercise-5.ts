/*
Napisz generyczną funkcję entry
Przyjmuje ona obiekt i klucz property tego obiektu. Zwraca parę z kluczem i wartością pod tym kluczem
Sprawdź czy typescript akceptuje wyrażenia w części CHECK
 */

function pick<T, K extends keyof T>(o: T, key: K): T[K] {
    return o[key];
}

function entry<T, K extends keyof T>(o: T, key: K): [K, T[K]] {
    return [key, o[key]];
}

const obj = {
    price: 123,
    name: 'foobar'
};

// CHECK
const [key, value] = entry(obj, 'price');
key.toLocaleUpperCase();
value.toFixed();
