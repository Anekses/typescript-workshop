import { NamedPerson } from "../task1/task1";

//Zadanie 3
//Stwórz interfejs NamedPersonClass, który rozszerza interfejs NamedPerson o wymagane pole: books[] 
//Stwórz klasę Person, która implementuje interfejs NamedPerson z task1.ts

interface NamedPersonClass extends NamedPerson {
    books: string[];
}

class Person implements NamedPersonClass {
    firstName: string;
    age: number;
    books: string[];

    constructor(firstName: string, age: number) {
        this.firstName = firstName;
        this.age = age;
    }

    fullGreeting(lastName: string): void {
        console.log(`Hi, I am ${this.firstName} ${lastName}`)
    }
}
