//Zadanie 1
//Stwórz interfejs NamedPerson dla person0
//Używając argumentów opcjonalnych, tablicy propertisów i definiowania funkcji dodaj obsługę dla person1, person2 i person3

export interface NamedPerson {
    firstName: string,
    age?: number,
    hobbies?: string[],
    car?: string,
    fullGreeting?(lastName: string): void
}

const person0: NamedPerson = {
    firstName: 'Jon'
}

const person1: NamedPerson = {
    firstName: 'Jon',
    age: 30
}

const person2: NamedPerson = {
    firstName: 'Jon',
    age: 30,
    hobbies: ['Cooking', 'TV'],
    car: 'Mazda'
}

const person3: NamedPerson = {
    firstName: 'Jon',
    age: 30,
    hobbies: ['Cooking', 'TV'],
    car: 'Mazda',
    fullGreeting(lastName: string): void {
        console.log(`Hi, I am ${this.firstName} ${lastName}`)
    }
}
