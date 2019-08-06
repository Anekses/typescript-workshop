/*
Uzupełnij generyczną klasę Stack
Sprawdź czy typescript akceptuje wyrażenia w części CHECK
 */

// TODO
class Stack<T> {
    push(e) {
        // dodaje element na szczyt stosu
    }

    pop() {
        // zwraca element ze szczytu stosu
    }

    toArray() {
        // zwraca elementy stosu jako tablicę
    }
}

// CHECK
const stack = new Stack<number>();
stack.push(123);
stack.toArray()[0].toFixed();
const elem = stack.pop();
elem && elem.toFixed();

