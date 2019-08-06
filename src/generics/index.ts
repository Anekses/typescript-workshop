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
function id(a) {
  return a;
}

// CHECK
id(123).toFixed();
id({ a: 1 }).a;

// TODO
function map(arr, f) {
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
function doublePrice(o) {
  // returns object with price doubled
}

// CHECK
doublePrice({ name: 'oil', price: 100 }).name;

// TODO
class Stringifier {
  
}

const a = new Stringifier(123);
a.getValue().toFixed();
a.getString().toLowerCase();

// TODO
class Stack {
  
}

// CHECK
const stack = new Stack();
stack.push(123);
stack.toArray()[0].toFixed();
stack.pop().toFixed();


function pick<T, K extends keyof T>(o: T, key: K): T[K] {
  return o[key];
}

// TODO
function entry(o, key) {
  // returns tuple of key and value
}

// CHECK


const obj = {
  price: 123,
  name: 'foobar'
};

const [key, value] = entry(obj, 'price');
key.toLowerCase();
value.toFixed();
