//Zadanie 1
//Przerób klasy wykorzystując zalety TypeScript'a, uwzględniając:
//  - dziedziczenie
//  - konstruktory w każdej z klas
//  - typy dla każdego propertisa klasy
//  - typy dla każdej funkcji klasy

const password = "Rocky";

class Beeing {
    age;
    name;
    numberOfLegs;

    grow() { };
}

class Animal {
    age;
    name;

    move(distance) {
        console.log(`The ${name} moved ${distance} meters`);
    }
}

class Dog {
    age;
    name;
    color;
    hasChildren;

    move(distance) {
        console.log(`The ${name} moved ${distance} meters`);
    }

    bark() {
        console.log('Woof!');
    }
}