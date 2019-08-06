function asArray<T>(e: T): T[] {
  return [e];
}

function failedId(a: any): any {
  return a;
}

function failedId2(a: unknown): unknown {
  return a;
}

// TODO
function id<T>(a: T): T {
  return a;
}

// CHECK
id(123).toFixed();
id({ a: 1 }).a;

// TODO
function map<T, U>(arr: T[], f: (e: T) => U): U[] {
  return arr.map(f);
}

interface WithPrice {
  price: number;
}

function getPrice<T extends WithPrice>(o: T): number {
  return o.price;
}

getPrice({ name: 'foobar', price: 100 })


// TODO
function doublePrice<T extends WithPrice>(o: T): T {
  return { ...o, price: o.price * 2 };
}

// CHECK
doublePrice({ name: 'oil', price: 100 }).name;


class Stringifier<T> {
  constructor(private val: T) {
  }

  getValue(): T {
    return this.val;
  }

  getString(): string {
    return String(this.val);
  }
}

const a = new Stringifier(123);
a.getValue().toFixed();
a.getString().toLowerCase();

class Stack<T> {
  private values: Array<T> = [];

  // TODO
  push(e: T): void {
    this.values.push(e);
  }
  // TODO
  pop(): T | undefined {
    return this.values.pop();
  }
  // TODO
  toArray(): Array<T> {
    return this.values;
  }
}

const stack = new Stack<number>();
stack.push(123);
stack.toArray()[0].toFixed();
const elem = stack.pop();
elem && elem.toFixed();


function pick<T, K extends keyof T>(o: T, key: K): T[K] {
  return o[key];
}

// TODO
function entry<T, K extends keyof T>(o: T, key: K): [K, T[K]] {
  return [key, o[key]];
}

const obj = {
  price: 123,
  name: 'foobar'
};

const [key, value] = entry(obj, 'price');
key.toLowerCase();
value.toFixed();
















