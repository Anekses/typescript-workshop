let password = "Rocky";
enum Color { Red, Blue, Green};

abstract class Beeing {
    abstract age: number;
    protected name: string;
    public numberOfLegs: number;

    abstract grow(): void;
}

class Animal extends Beeing {
    public age: number;

    constructor(age: number, name: string) {
        super();
        this.name = name;
        this.age = age;
    }

    move(distance: number): void {
        console.log(`The ${this.name} moved ${distance} meters`);
    }

    grow(): void {
        this.age++;
    }
}

class Dog extends Animal {
    public color: Color;
    public hasChildren: boolean;
    private _fullName: string;

    constructor(age: number, name: string, color: Color, hasChildren: boolean) {
        super(age, name);
        this.color = color;
        this.hasChildren = hasChildren;
    }

    set fullName(value: string) {
        if(value.length > 5) {
            this._fullName = value;
        }
    }

    get fullName() {
        if (password == 'Balboa') {
            return this.name;
        }
        return 'Wrong password!';
    }

    move(distance) {
        console.log(`The color of dog is: ${Color[this.color]}`);
        super.move(distance);
    }

    bark() {
        console.log('Woof!');
    }
}

let dog: Dog = new Dog(8, "Reksio", Color.Red, false);
dog.move(20);
dog.bark();

console.log(dog.age);
dog.grow();
console.log(dog.age);
