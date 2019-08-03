// //Zadanie 2
// // Zmodyfikuj pola oraz metody, tak żeby prawdziwe było:
// //  - name jest typu 'protected'
// //  - numberOfLegs jest typu 'readonly'
// //  - color jest Enum
// //  - metoda "grow" zwiększa wiek o 1 i pokazuje (console.log) nowy wiek
// //  - metoda "move" w klasie "Dog" pokazuje (console.log) kolor psa

// const password = "Rocky";

// class Beeing {
//     age: number;
//     name: string;
//     numberOfLegs: number;

//     constructor(age: number, name: string, numberOfLegs: number) {
//         this.age = age;
//         this.name = name;
//         this.numberOfLegs = numberOfLegs;
//     }

//     grow(): void { };
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
//     color: string;
//     hasChildren: boolean;

//     constructor(age: number, name: string, numberOfLegs: number, color: string, hasChildren: boolean) {
//         super(age, name, numberOfLegs);
//         this.color = color;
//         this.hasChildren = hasChildren;
//     }

//     bark(): void {
//         console.log('Woof!');
//     }
// }