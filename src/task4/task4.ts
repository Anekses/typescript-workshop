// //Zadanie 4
// //Przerób na abstrakcyjne:
// //  - klasę Beeing
// //  - pole "age" klasy Beeing
// //  - metodę "grow" klasy Beeing
// //Popraw błędy i klasy dziedziczące po niej

// const password = "Balboa";
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
//     private _fullName: string;

//     constructor(age: number, name: string, numberOfLegs: number, color: Color, hasChildren: boolean) {
//         super(age, name, numberOfLegs);
//         this.color = color;
//         this.hasChildren = hasChildren;
//     }

//     set fullName(value: string) {
//         if (value.length > 5) {
//             this._fullName = value;
//         }
//     }

//     get fullName() {
//         if (password === 'Balboa') {
//             return this.name;
//         }
//         return 'Wrong password!';
//     }

//     move(distance: number): void {
//         console.log(`The color of dog is: ${Color[this.color]}`);
//         super.move(distance);
//     }

//     bark(): void {
//         console.log('Woof!');
//     }
// }

// const dog: Dog = new Dog(5, "Reksio", 4, Color.Red, false);
// console.log(dog.fullName);

// dog.name = "Reks";
// console.log(dog.fullName);

// dog.name = "Reksio The Master";
// console.log(dog.fullName);