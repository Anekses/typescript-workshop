//Zadania 1-2
let greet = (person) => {
    console.log(`Hello, ${person.firstName}`);
}

let changeName = (person, newName) => {
    person.firstName = newName;
}

let person0 = {
    firstName: "Jon"
}

let person1 = {
    firstName: "Jon",
    age: 30
}

let person2 = {
    firstName: "Jon",
    age: 30,
    hobbies: ["Cooking", "TV"],
    car: "Mazda"
}

let person3 = {
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
// greet(person1);
// greet(person2);
// greet(person3);

//Zadanie 3
let isThisSamePersonFunction = (p1, p2) => {
    if (p1.firstName == p2.firstName) {
        return true;
    }
    return false;
}