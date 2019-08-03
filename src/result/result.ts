// const password = "Balboa";
// enum Color { Red, Blue, Green };

// abstract class Beeing {
//     abstract age: number;
//     protected name: string;
//     public numberOfLegs: number;

//     abstract grow(): void;
// }

// class Animal extends Beeing {
//     age: number;

//     constructor(age: number, name: string, numberOfLegs: number) {
//         super();
//         this.age = age;
//         this.name = name;
//         this.numberOfLegs = numberOfLegs;
//     }

//     move(distance: number): void {
//         console.log(`The ${this.name} moved ${distance} meters`);
//     }

//     grow(): void {
//         this.age++;
//         console.log(`I am ${this.age} years old.`);
//     }
// }

// class Dog extends Animal {
//     grow(): void {
//         throw new Error("Method not implemented.");
//     }
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