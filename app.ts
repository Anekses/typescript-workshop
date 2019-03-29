let password = "Rocky";

abstract class Beeing {
    abstract age;
    name;
    numberOfLegs;

    abstract grow();
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