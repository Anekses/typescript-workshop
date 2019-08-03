// //Zadanie 3
// //Dodaj getter i setter do fullName (nowe pole private w klasie "Dog"), gdzie:
// //setter ustawi nową wartość tylko jeśli newValue.length > 5;
// //getter poda wartość tylko jeśli zmienna "password" będzie "Balboa"

// const password = "Rocky";
// enum Color { Red, Blue, Green };

// class Beeing {
//     age: number;
//     protected name: string;
//     readonly numberOfLegs: number;

//     constructor(age: number, name: string, numberOfLegs: number) {
//         this.age = age;
//         this.name = name;
//         this.numberOfLegs = numberOfLegs;
//     }

//     grow(): void {
//         this.age++;
//         console.log(`I am ${this.age} years old.`);
//     };
// }

// class Animal extends Beeing {
//     constructor(age: number, name: string, numberOfLegs: number) {
//         super(age, name, numberOfLegs);
//     }

//     move(distance: number): void {
//         console.log(`The ${this.name} moved ${distance} meters`);
//     }
// }

// class Dog extends Animal {
//     age: number;
//     name: string;
//     color: Color;
//     hasChildren: boolean;

//     constructor(age: number, name: string, numberOfLegs: number, color: Color, hasChildren: boolean) {
//         super(age, name, numberOfLegs);
//         this.color = color;
//         this.hasChildren = hasChildren;
//     }

//     move(distance: number): void {
//         console.log(`The color of dog is: ${Color[this.color]}`);
//         super.move(distance);
//     }

//     bark(): void {
//         console.log('Woof!');
//     }
// }