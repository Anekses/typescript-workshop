//Zadania 1-2
// interface NamedPerson {
//     firstName: string,
//     age?: number,
//     [propName: string]: any,
//     greet?(lastName: string): void
// }

let greet = (person) => {
    console.log(`Hello, ${person.firstName}`);
}

let changeName = (person, newName) => {
    person.firstName = newName;
}

let person0: NamedPerson = {
    firstName: "Jon"
}

let person1: NamedPerson = {
    firstName: "Jon",
    age: 30
}

let person2: NamedPerson = {
    firstName: "Jon",
    age: 30,
    hobbies: ["Cooking", "TV"],
    car: "Mazda"
}

let person3: NamedPerson = {
    firstName: "Jon",
    age: 30,
    hobbies: ["Cooking", "TV"],
    car: "Mazda",
    greet(lastName) {
        console.log(`Hi, I am ${this.firstName} ${lastName}`)
    }
}

greet(person0);
changeName(person0, "Johny");
greet(person0);
greet(person1);
greet(person2);
greet(person3);

//Zadanie 3
interface isThisSamePerson {
    (firstPerson: NamedPerson, secondPerson: NamedPerson): boolean;
}

let isThisSamePersonFunction: isThisSamePerson;
isThisSamePersonFunction = (p1: NamedPerson, p2: NamedPerson) => {
    if (p1.firstName == p2.firstName) {
        return true;
    }
    return false;
}

//Zadanie 4
class Person implements NamedPerson {  
    firstName: string;
    age: number;
    hobbies: string[];

    constructor(firstName: string, age: number) {
        this.firstName = firstName;
        this.age = age;
    }

    greet(lastName: string): void {
        console.log(`Hi, I am ${this.firstName} ${lastName}`)
    }
}

let myPerson: Person = new Person("Stefan", 40);
myPerson.greet("Stefański");

//Zadanie 5
interface NamedPerson {
    hobbies?: string[];
}

let person4: NamedPerson = {
    firstName: "Jon",
    hobbies: ["Cooking", "TV"]
}

//Zadanie 6
interface NamedPerson {
    firstName: string
}

interface NamedPerson {
    age?: number,
}

interface NamedPerson {
    [propName: string]: any,
}

interface NamedPerson {
    greet?(lastName: string): void
}

