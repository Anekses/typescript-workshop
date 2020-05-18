# [fit] Typescript workshop

---

# Day one

* Introduction
* Classes and interfaces
* Types Algebra
* Generics

---

# Types algebra

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
type Union = TypeA | TypeB
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
type Role = 'user' | 'admin' | 'editor'



const lead: Role = 'lead';
/* Error:
  Type '"lead"' is not assignable to type 'Role'
*/  
```


---

```typescript
enum Role { ADMIN = 'admin', USER = 'user' }`
```

---

```typescript
enum Role { ADMIN = 'admin', USER = 'user' }`
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


# `type Intersection = TypeA & TypeB`

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

# Generics (?)

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
  age: number
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
  offers?: Offer[];
  error?: Error;
  isLoading: boolean;
}

function render(props: OfferListProps): string {
  const { isLoading, offers, error } = props;

  if (error)
    return error.toString();
  if (isLoading) {
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




