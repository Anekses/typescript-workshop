//Zadanie 4
//Rozbij interfejs NamedPerson na 5 interfejsów - co zauważasz?
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
