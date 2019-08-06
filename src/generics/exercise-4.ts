/*
Uzupełnij generyczną klasę Stack
Sprawdź czy typescript akceptuje wyrażenia w części CHECK
 */


class Stack<T> {
    private values: Array<T> = [];

    push(e: T): void {
        this.values.push(e);
    }
    pop(): T | undefined {
        return this.values.pop();
    }
    toArray(): Array<T> {
        return this.values;
    }
}

// CHECK
const stack = new Stack<number>();
stack.push(123);
stack.toArray()[0].toFixed();
const elem = stack.pop();
elem && elem.toFixed();

