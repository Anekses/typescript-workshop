Slidenumbers: true

# [fit] Typescript workshop

### Adrian Mróź
### Adrian Rydzyński
  
---

# Day one

* Introduction
* Classes
* Interfaces
* Types Algebra
* Generics

---

## [fit] Introduction

---

## A few words
- interfaces
- inline documentation
- easier to refactor
- backend friendly
- less chance to make a mistake
- and a lot more...

^ nie wszystkie biblioteki są kompatybilne
^ większa ilość kodu/plików

---

## Types part 1
Type | Example
---|---
`boolean` | `const isDone: boolean = false;`
`number` | `const decimal: number = 6;`
`string` | `const color: string = "blue";`
`array` | `const list: number[] = [1, 2, 3];`
`tuple` | `const x: [string, number] = ["hello", 15];`
`enum` | `enum Color {Red, Green, Blue}          const c: Color = Color.Green;`

---

## Types part 2
Type | Example
---|---
`void` | `const print = (): void => { console.log('printed') }`
`null` | `const n: null = null; `
`undefined` | `const u: undefined = undefined;`
`object` | `const o: object = { prop: 0, prop1: "red" }`
`any` | `const variable: any = 4;`
`unknown` | `const u: unknown = unknown`
`never` | `const func = (): never => ...`

---

## any vs unknown

```typescript
let a: any;
let b: unknown;

a.foo()
b.foo()
```

---

## Union
```typescript
let age: number | string;
```

Execution | Result
---|---
`age = 5`|`ok`
`age = "5"`|`ok`
`age = true`|`error, niepoprawne przypisanie`

---

## Nullable
```typescript
const thisCanBeNullOrNumber: number | null;
```

### strictNullChecks: true

^ domyślnie jest false i gdy damy "string" to może być Nullem

---

## Explicit & Implicit

Type | Example
---|---
Explicit|`const lucky: number;`
Implicit|`const lucky = 23;`

---

## Functions
```typescript
const add = ( x: number, y: number, double?: boolean ): number => {
  const sum = x + y;
  return double ? 2 * sum : sum;
}
```


---

## Functions

Execution | Example
---|---
`add(5, 7)`|`12`
`add(5, 7, true)`|`24`
`add(5)`|`error, zbyt mała liczba argumentów`
`add(5, 6, 7, 8)`|`error, zbyt duża liczba argumentów`
`add("tt", 5, "fe")`|`error, niepoprawne argumenty`

---

## Functions

Basic functions

```typescript
export const multi = (a: number, b: number): number => {
	return a * b;
}

export const isBigger = (a: number, b: number): boolean => {
	return a > b;
}
```

---

## Functions

Optional parameters

```typescript
export const sumNumbers = (a: number, b: number, foo?: number): number | string => {
	if (foo) {
		return (a + b + foo).toString();
	}
	return a + b;
} 
```

---

## Functions

Default parameters

```typescript
export enum MathOperations { Sum, Diff, Multi, Div };
export const calculator = (a: number = 5, b: number = 3, operation = MathOperations.Sum): number => {
	switch(operation) {
		case MathOperations.Sum:
			return a + b;
		case MathOperations.Diff:
			return a - b;
		...
		default:
			return 0;
	}
}
```

---

## Functions

Rest parameters

```typescript
export const sumMultiNumbers = (...numbers: number[]): number => {
	let result = 0;
	numbers.forEach(number => result += number);
	
	return result;
}

```

---

## Functions

Overloads

```typescript
const suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x): any {
	if (typeof x == "object") {
		returnMath.floor(Math.random() * x.length);
	}
	else if (typeof x == "number") {
		let pickedSuit = Math.floor(x / 13);
		return { suit: suits[pickedSuit], card: x % 13 };
	}
}

const myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }];
const pickedCard1 = myDeck[pickCard(myDeck)];
const pickedCard2 = pickCard(15);
```


---

# [fit] Classes

---

## Classes
- template for data
- variables and functions
- es6 JavaScript

---

## Classes

Main assumptions

```typescript
class Greeter {
	greeting: string;
	constructor(message: string) {
		this.greeting = message;
	}
	greet() {
		return `Hello, ${this.greeting}`;
	}
}

const greeter = new Greeter('world');
greeter.greet()		//function
greeter.greeting	//variable
```

---

## Classes

Public, protected, private modifiers

```typescript

class User {
	private firstName: string;
	protected secondName: string;
	public age: number;
	id: number;

	constructor(firstName: string) {
		this.firstName = firstName;
	}
}

const user = new User('Stefan');

```

Public by default

---

## Classes

TypeScript 3.8 Private Fields

```typescript
class Animal {
    #name: string;
    constructor(theName: string) { this.#name = theName; }
}

new Animal("Cat").#name; //error
```

---


## Classes

Readonly properties

```typescript

class User {
	readonly firstName: string;
	readonly secondName: string = 'Koziol';

	constructor(firstName: string) {
		this.firstName = firstName;
	}
}

const user = new User('Stefan');
user.firstName = 'Marian'	//error! readonly
user.secondName = 'Nowak'	//error! readonly

```

---


## Classes

Parameter properties

```typescript

class User {
	readonly secondName = 'Koziol';

	constructor(readonly firstName: string) {
		this.firstName = firstName;
	}
}

const user = new User('Stefan');
user.firstName = 'Marian'	//error! readonly
user.secondName = 'Nowak'	//error! readonly

```

---

## Classes

Short constructor

```typescript
class User {
	readonly secondName: string = 'Koziol';

	constructor(readonly firstName: string) { }
}
```

---

## Classes

Static properties

```typescript

class BabyUser {
	static nationality = 'Polish';

	constructor(readonly firstName: string) {
		this.firstName = firstName;
	}
}

const user = new BabyUser('Stefan');
user.nationality	//'Polish'
BabyUser.nationality	//'Polish'

```

---

## Classes

Abstract

```typescript
abstract class Department {
	constructor(public name: string) {}

	abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
	constructor() {
		super("Accounting and Auditing"); // constructors in derived classes must call super()
	}
	printMeeting(): void {
		console.log("The Accounting Department meets each Monday at 10am.");
	}
}

let department: Department; 		 // ok, reference
department = new Department(); 		 // error! cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok
```

---

## Classes

Inheritance

```typescript
class Animal {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	move(distanceInMeters: number = 0) {
		console.log(`Animal moved ${distanceInMeters}m.`);
	}
}

class Dog extends Animal {
	constructor(name: string) {
		super(name); //first element!
	}
	bark() {
		console.log("Woof! Woof!");
	}
}

const dog = new Dog();
dog.bark();
dog.move(10);
```

---

## Classes

Getters and Setters

```typescript
class Plant {
	private _species: string;
	set species(value: string) {
		this._species = value.length > 3 ? value : 'default';
	}
	get species() {
		return this._species.toLowerCase();
	}
}

const plant = new Plant();	//default
plant.species = 'AB'		//default
plant.species = 'Green'		//green
```

---

# [fit] Interfaces

---

## Interfaces

- contract
- validation before runtime
- types for variables and functions
- inheritance

---

## Interfaces

Basics

```typescript
const prepareTile = (tile: { cols: string, rows: string }): { cols: string } => {
	return {
		cols: tile.cols		
	}
}
```

---

## Interfaces

Basics

```typescript

interface Tile {
	cols: string;
	rows: string;
}

interface Box {
	cols: string;
}

const prepareTile = (tile: Tile): Box => {
	return {
		cols: tile.cols		
	}
}
```

---

## Interfaces

Optional properties

```typescript

interface Tile {
	cols: string;
	rows: string;
}

interface Box {
	cols: string;
	rows?: string;
}

const prepareTile = (tile: Tile): Box => {
	return {
		cols: tile.cols		
	}
}

const prepareTileFinal = (tile: Tile): Box => {
	return {
		cols: tile.cols,	
		rows: tile.rows	
	}
}
```

---

## Interfaces

Interface any

```typescript

interface Tile {
	cols: string;
	rows: string;
}

interface Box {
	cols: string;
	rows?: string;
	[propName: string]: any;
}

const prepareTile = (tile: Tile): Box => {
	return {
		cols: tile.cols,
		anything: false,
		someMore: [true, 1]	
	}
}
```

---

## Interfaces

Readonly

```typescript
interface Tile {
	cols: number;
	rows: number;
	readonly color: string;
}

const tile: Tile = {
	cols: 5,
	rows: 3,
	color: 'red'
} 

tile.cols = 4		//ok
tile.color = 'blue'	//error
```

---

## Interfaces

ReadonlyArray<T>

```typescript
const arr: number[] = [1, 2, 3, 4]; 
const readonlyArr<number> = arr;

readonlyArr[0] = 12;			//error, only reading
readonlyArr.push(5);			//error, push not exist
readonlyArr.length = 100;		//error, length is read-only property
arr = readonlyArr;				//error, number[] != readonly number[]
arr = readonlyArr as number[];	//ok
```

---

## Interfaces

Function types

```typescript
interface isValidPerson {
	(firstName: string, lastName: string): boolean;
}
```

---

## Interfaces

Function types

```typescript
interface isValidPerson {
	(firstName: string, lastName: string): boolean;
}

const isValidPersonFunction: isValidPerson = (firstName: string, lastName: string): boolean => {
	return firstName.length > 3 && lastName != '';
}
```

---

## Interfaces

Function types

```typescript
interface isValidPerson {
	(firstName: string, lastName: string): boolean;
}

const isValidPersonFunction: isValidPerson = (fN: string, lN: string): boolean => {
	return fN.length > 3 && lN != '';
}
```

---

## Interfaces

Function types

```typescript
interface isValidPerson {
	(firstName: string, lastName: string): boolean;
}

let isValidPersonFunction: isValidPerson;

isValidPersonFunction = (fN: string, lN: string): boolean => {
	return fN.length > 3 && lN != '';
}
```

---

## Interfaces

Function types

```typescript
interface isValidPerson {
	(firstName: string, lastName: string): boolean;
}

let isValidPersonFunction: isValidPerson;

isValidPersonFunction = (fN, lN) => {
	return fN.length > 3 && lN != '';
}
```

---

## Interfaces

Indexable Types

```typescript
interface StringArray {
	[index: number]: string;
	length: number;
	name: string;		//error
}

const myArray: StringArray = ['John', 'Wick'];
console.log(myArray[0])		//'John'
```

---

## Interfaces

Class Types

```typescript
interface ClockInterface {
	currentTime: Date;
	setTime(d: Date): void;
}

class Clock implements ClockInterface {
	currentTime: Date;
	somethingNotFromInterface: string;

	constructor() {
		this.currentTime = new Date();
		this.somethingNotFromInterface = 'Hello';
	}

	setTime(date: Date): void {
		this.currentTime = date;	
	}
}
```

---

## Interfaces

Inheritance 

```typescript
interface Shape {
	color: string;
}

interface PenStroke {
	penWidth: number;
}

interface Square extends Shape, PenStroke {
	sideLength: number;
}

const square: Square = {
	color: 'blue',
	sideLength: 10,
	penWidth: 5
}
```

---

## Interfaces

Extend interfaces 

```typescript
interface Square {
	color: string;
}

interface Square {
	penWidth: number;
}

interface Square {
	sideLength: number;
}

const square: Square = {
	color: 'blue',
	sideLength: 10,
	penWidth: 5
}
```

---


## Interfaces

Advanced Interfaces 

```typescript
interface Counter {
	(start: number): string;
	interval: number;
	reset(): void;
}

function getCounter(): Counter {
	let counter = function (start: number) {} as Counter;
	counter.interval = 123;
	counter.reset = function () {};
	return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

---

## Interfaces

Type vs Interface

```typescript
type Base {
  name: string
}

type Base {
  firstName: string
}

Type: Error, duplicate Base	
Interface: OK
```

---

## Interfaces

Type vs Interface

```typescript
type Keys = 'firstName' | 'secondName'

type DudeType = {
  .[key in Keys]: string
}

const test: DudeType = {
  firstName: 'Jan',
  secondName: 'Nowak'
}

Type: OK
Interface: Error
Ignore dot
```

---

## Interfaces

Proper way to use Type & Interface

^ Interfejsy można wielokrotnie deklarować
^ Interfejsy można multi dziedziczyć
^ Type używamy głównie do union lub tuples, type Programmer = Person | PeopleIt

```typescript
interface Base {
	age: number;
}
interface Name extends Base {
	firstName: string;
	secondName: string;
}
interface FullName extends Base {
	fullName: string;
}
type Person = Name | FullName;

const person: Person = {
	age: 5,
	firstName: 'Stephen',
	secondName: 'King'
}

const secondPerson: Person = {
	age: 15,
	fullName: 'Andrzej Sapkowski'
}
```

---

## Interfaces

Result code

```typescript
 
```

---

# [fit] Types algebra

---


> Type is a set of possible values


---

# `type Name = ...`

---

```typescript
type Id = number;
```

---

```typescript
type MsgId = string;
type ClientId = string;

const clientId: ClientId = 1;
const msgId: MsgId = clientId;
```

---

```typescript
type Person = {
  name: string;
  age: number;
}

interface Person {
  name: string;
  age: number;
}
```

---

```typescript
type Union = TypeA | TypeB;
```

---

```typescript
type Id = string | number;

const id: Id = getId();

id.toUpperCase();

/* Error:
 Property 'toUpperCase' does not exist 
    on type 'Id'.
   Property 'toUpperCase' does not exist 
    on type 'number'.(2339)
*/

```

---


```typescript
type Role = 'user' | 'admin' | 'editor';



const lead: Role = 'lead';
/* Error:
  Type '"lead"' is not assignable to type 'Role'
*/  
```


---

```typescript
enum Role { ADMIN = 'admin', USER = 'user' }
```

---

```typescript
enum Role { ADMIN = 'admin', USER = 'user' }
Role.ADMIN;
```

output:

```javascript
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role["USER"] = "user";
})(Role || (Role = {}));
Role.ADMIN;
```

---

```typescript
const enum Role { ADMIN = 'admin', USER = 'user' }

Role.ADMIN;
```

output:

```javascript
"admin" /* ADMIN */;
```

---

# [fit] `type Intersection = TypeA & TypeB`

---

```typescript
interface OsSettings {
  os: string;
}

interface Network {
  ip: string;
}

type Settings = OsSettings & Network; 

const settings: Settings = {
  os: "windows",
  ip: "127.0.0.1"
}
```

---

## Intersection vs `extends`

* interfaces are open ended

---

## Intersection vs `extends`

* interfaces are open ended
* signature compatibility

---

```typescript
interface StringPrinter {
  print(a: string): string;
}

interface BooleanStringPrinter extends StringPrinter {
  print(a: boolean): string;
}
/* Error: Types of property 'print' are incompatible.
    Type '(a: boolean) => string' is not assignable to type '(a: string) => string'.
      Types of parameters 'a' and 'a' are incompatible.
        Type 'string' is not assignable to type 'boolean'.(2430)
*/
```

---

```typescript
interface BooleanPrinter {
  print(a: boolean): string;
}

type BooleanStringPrinter = BooleanPrinter & StringPrinter;
```

---


## Intersection vs `extends`

* interfaces are open ended
* signature compatibility
* we have three names with intersection

---

# [fit] Generics 

---

# Array
```typescript
type NumArray = Array<number>;

const arr: NumArray = [1, 2, 3];
arr[0].toFixed();
```

---

# Promise
```typescript
type AsyncUser = Promise<User>;

const user: AsyncUser = getUser(123);
user.then(user => {
  console.log(user.name);
});
```

---

# Pick
```typescript
interface User {
  id: number;
  name: string;
  address: string;
  age: number;
}

type NameAndAddress = Pick<'name' | 'address', User>;

function sendPackage(receipent: NameAndAddress) {
  print(receipent.name, receipent.address);
}
```

---

# Omit
```typescript
type WithoutId = Omit<User, 'id'>
// note changed order

function serializeToClient(user: WithoutId) {
  user.id;
/*
  Error:
    Property 'id' does not exist on type 
      'Pick<User, "name" | "address" | "age">'.
*/
  
}
```

---

# Record
```typescript
type Users = Record<number, User>;
const usersById: Users = getAllUsers();
usersById[1234].name;
```

---

# "Generics" are functions of types

---

```typescript
interface Team<T> {
  leader: T;
  members: Array<T>;
}

type AllegroTeam = Team<AllegroEmployee>;
```

---

```typescript
interface HasId {
  id: string;
}

type Entities<T> = Array<T & HasId>;

type Offers = Entities<{ title: string }>; 

const offers: Offers = [{ title: "foobar", id: "1" }];
```

---

```typescript
function first<T>(collection: Array<T>): T | null {
  return collection.length ? collection[0] : null;
}

const users: Array<User> = getUsers();
const firstUser = first<User>(users);
```

---

```typescript
function map<T, S>(collection: T[], f: (e: T) => S): S[] {
  return collection.map(f);
}
```

---

# [fit] Typescript workshop

---

# Day two

* Questions about exercises
* Structural typing
* Discriminated unions
* Optional chaining, nullish coalescing
* `tsconfig` and `ts-loader`
* typescript and tests

---

# [fit] Structural types

---

```typescript
interface Person {
  name: string;
  age: number;
}

function printName (person: Person) {
  console.log(person.name);
}
```

---

```typescript
interface HasName {
  name: string;
}

function printName (withName: HasName) {
  console.log(withName.name);
}

```

---

```typescript
function upperCaseName (withName: HasName): HasName {
  return { name: withName.name.toUpperCase() };
}
```

---

```typescript
function upperCaseName (obj: HasName): HasName {
  return { ...obj, name: obj.name.toUpperCase() };
}
```

---

```typescript
const john: Person = { name: 'John', age: 18 };

const fancy = upperCaseName(john);

console.log(fancy.age);
/* Error: 
    Property 'age' does not exist on type 'HasName' 
*/
```

---

```typescript
function upperCaseName<T extends HasName>(obj: T): T {
  return { ...obj, name: obj.name.toUppercase() };
}

const john: Person = { name: 'John', age: 18 };
const fancy = upperCaseName(john);
console.log(fancy.age);
```


---

# Discriminated unions

---

# unions are ... unions

```typescript
interface Cat {
  name: string;
  breed: string;
}

interface Dog {
  name: string;
  breed: string;
}

type Animal = Cat | Dog;
```

---

## Exhaustive checking

---

```typescript
interface User {
  role: UserRole;
}

enum UserRole { ADMIN = 'admin', GUEST = 'guest' }

function hasAccess(user: User): boolean {
  switch (user.role) {
    case UserRole.ADMIN:
      return true;
    case UserRole.GUEST:
      return false;
  }
}
```

---

```typescript
interface User {
  role: UserRole;
}

enum UserRole { ADMIN = 'admin', GUEST = 'guest' }

function hasAccess(user: User): boolean {
  switch (user.role) {
    case UserRole.ADMIN:
      return true;
  }
}
/* 
  Error: Function lacks ending return statement and return type does not include 'undefined'
*/
```

---

## Type narrowing

---

```typescript
class Admin {
  public privilage: string;
}


if (user instanceof Admin) {
  user.privilage === 'edit';
}
```
---

## Discriminated union

---

```typescript
enum UserRole { ADMIN = 'admin', GUEST = 'guest' }

interface Guest {
  role: UserRole.GUEST;
  email: string;
}

interface Admin {
  role: UserRole.ADMIN;
  username: string;
}

type User = Guest | Admin;

function emailAddress(user: User): string {
  switch (user.role) {
    case UserRole.ADMIN:
      return `${user.username}@ourcompany.com`;
      case UserRole.GUEST:
      return user.email;
  }
}
```

---

```typescript
interface OfferListProps {
  isLoading: boolean;
  offers?: Offer[];
  error?: Error;
}

function render(props: OfferListProps): string {
  const { isLoading, offers, error } = props;

  if (error)
    return error.toString();
  if (isLoading)
    return  "Loading";
  return renderOffers(offers);
}
```

---

```typescript
enum Status { LOADED, LOADING, ERROR }

interface Loaded<T> {
  status: Status.LOADED;
  data: T;
}

interface Error {
  status: Status.ERROR;
  error: Error;
}

interface Loading {
  status: Status.LOADING;
}

type Request<T> = Loaded<T> | Error | Loading;
```

---

```typescript
interface Offer { };
type OffersRequest = Request<Array<Offer>>;

function render(req: OfferRequest): string {
  switch (req.status) {
    case: Status.LOADING:
      return "Loading ...";
    case: Status.ERROR:
      return req.error.toString();
    case: Status.LOADED:  
      return renderOffers(req.data);
}
```

---

# Optional chaining, nullish coalescing

---

## Optional chaining

- null
- undefined
- check left value
- fastest way (but not the lightest)

---

## Optional chaining

```typescript
if (foo && foo.bar && foo.bar.baz && foo.bar.baz.fis) {
	...
}
```

---

## Optional chaining

```typescript
if (foo && foo.bar && foo.bar.baz && foo.bar.baz.fis) {
	...
}

if (foo?.bar?.baz?.fis) {
	...
}
```

---

## Optional chaining

```typescript
const x = foo?.bar.baz();

-> 
const x = foo === null || foo === undefined ? undefined : foo.bar.baz();
```

---

## Optional chaining

Optional chaining vs &&

- empty string
- 0
- NaN
- false

---

## Optional chaining

Arrays

```typescript
const arr = [1, 2, 3, 4];

function tryGetFirstElement(array: any) {
	return array?.[0];
}

tryGetFirstElement(arr);	//1
tryGetFirstElement(0);		//undefined
```

---

## Optional chaining

Performance

```typescript
Performance of JavaScript optional chaining
Eryk Napierała

foo && foo.bar && foo.bar.baz && foo.bar.baz.qux
49 characters

foo?.bar?.baz?.qux;
19 characters

var _a,_b,_c;null===(_c=null===(_b=null===(_a=foo)||
void 0===_a?void 0:_a.bar)||void 0===_b?void 0:_b.baz)||void 0===_c||_c.qux;
172 characters
```

---

## Nullish Coalescing

Checks for

- null
- undefined

---

## Nullish Coalescing

Valid values

- 0
- NaN
- ""
- false

---

## Nullish Coalescing

```typescript
const x = foo ?? bar();
```

---

## Nullish Coalescing

```typescript
const x = foo ?? bar();

const x = foo !== null && foo !== undefined ? foo : bar();
```

---

## Nullish Coalescing

?? vs ||

```typescript
let somethingUndefined;
const value = somethingUndefined || 0.5;		//0.5
const nullishValue = somethingUndefined || 0.5;	//0.5


let somethingFalsy = 0;
const value = somethingFalsy || 0.5;			//0.5
const nullishValue = somethingFalsy || 0.5;		//0
```

---

# Tsconfig and ts-loader

---

## Tsconfig

Sample tsconfig.json

```typescript
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "ES5",
        "noImplicitAny": false,
        "sourceMap": false,
        "experimentalDecorators": true
    },
    "exclude": [
        "node_modules"
    ]
}
```

---

## Tsconfig

- files
- include and exclude
- extends
- complieOnSave

---

## Tsconfig

Compiler Options

- module
- target
- noImplicitAny
- sourceMap

---

## Tsconfig

Compiler Options

- allowJs
- jsx
- noEmitOnError
- noUnusedLocals/Parameters

---

## Tsconfig

Compiler Options

- outDir
- removeComments
- strictNullChecks

---
## Ts-loader

```typescript
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

---

# TypeScript and tests

---

## type guards

```typescript
function isAdmin(o: unknown): o is Admin {
  return !!o && typeof o === "object" 
    && o.kind === UserRole.ADMIN;
}


if (isAdmin(john)) {
  john.privilage;
}
```

---

## type assertions

```typescript
type User = Guest | Admin;

function getUserByName(name: string): User { }

function getCatGif(): CatGif { }

const john: Admin = getUserByName("John") as Admin;
const mike: Admin = getCatGif() as Admin;
/* Error:
  Conversion of type 'CatGif' to type 'Admin' 
    may be a mistake because neither type 
    sufficiently overlaps with the other.
*/
```

---

# Thanks!
