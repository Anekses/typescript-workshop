"use strict";
//Zadanie 1
//Stwórz interfejs NamedPerson dla person0
//Używając argumentów opcjonalnych, tablicy propertisów i definiowania funkcji dodaj obsługę dla person1, person2 i person3
Object.defineProperty(exports, "__esModule", { value: true });
var person0 = {
    firstName: 'Jon'
};
var person1 = {
    firstName: 'Jon',
    age: 30
};
var person2 = {
    firstName: 'Jon',
    age: 30,
    hobbies: ['Cooking', 'TV'],
    car: 'Mazda'
};
var person3 = {
    firstName: 'Jon',
    age: 30,
    hobbies: ['Cooking', 'TV'],
    car: 'Mazda',
    fullGreeting: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
