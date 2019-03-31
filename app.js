//Zadania 1-2
// interface NamedPerson {
//     firstName: string,
//     age?: number,
//     [propName: string]: any,
//     greet?(lastName: string): void
// }
var greet = function (person) {
    console.log("Hello, " + person.firstName);
};
var changeName = function (person, newName) {
    person.firstName = newName;
};
var person0 = {
    firstName: "Jon"
};
var person1 = {
    firstName: "Jon",
    age: 30
};
var person2 = {
    firstName: "Jon",
    age: 30,
    hobbies: ["Cooking", "TV"],
    car: "Mazda"
};
var person3 = {
    firstName: "Jon",
    age: 30,
    hobbies: ["Cooking", "TV"],
    car: "Mazda",
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
greet(person0);
changeName(person0, "Johny");
greet(person0);
greet(person1);
greet(person2);
greet(person3);
var isThisSamePersonFunction;
isThisSamePersonFunction = function (p1, p2) {
    if (p1.firstName == p2.firstName) {
        return true;
    }
    return false;
};
//Zadanie 4
var Person = /** @class */ (function () {
    function Person(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person("Stefan", 40);
myPerson.greet("Stefański");
var person4 = {
    firstName: "Jon",
    hobbies: ["Cooking", "TV"]
};
