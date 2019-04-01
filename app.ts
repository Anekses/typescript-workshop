//Zadanie 1
let echo = <T>(data: T): T => {
    return data;
}

console.log('Zadanie 1')
console.log(echo(5));
console.log(echo("Cookie"));

// console.log(echo(5).length);
console.log(echo("Cookie").length);

console.log(echo(5).toFixed());
// console.log(echo("Cookie").toFixed());

//Zadanie 2
interface GenericIdentityFn {
    <T>(func: T): T
}

let myIdentity: GenericIdentityFn = <T>(arg: T): T => {
    return arg;
}

//BAD!
// let noIdentity: GenericIdentityFn = (arg) => {
//     if (typeof arg == 'boolean') {
//         return 5;
//     }
//     return true;
// }

console.log('Zadanie 3')

class GenericAdd<T extends number | string> {
    baseValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericAdd<number>();
myGenericNumber.baseValue = 0;
myGenericNumber.add = (x: number, y: number) => x + y;
console.log(myGenericNumber.add(5, 10));

let myGenericString = new GenericAdd<string>();
myGenericString.baseValue = "";
myGenericString.add = (x: string, y: string) => x + y;
console.log(myGenericString.add("test ", "ciastko"));

// let myGenericBoolean = new GenericAdd();
// myGenericBoolean.baseValue = false;
// console.log(myGenericBoolean.add(true, false));

//Zadanie 4
class SimpleMath<T extends U, U extends number | string> {
    baseValue: T;
    multiplyValue: U;

    constructor(base: T, multi: U) {
        this.baseValue = base;
        this.multiplyValue = multi;
    }

    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

console.log('Zadanie 4')

const simpleMath = new SimpleMath<string, string>("5", "10");
// const simpleMath1 = new SimpleMath<string, number>("5", 10);
// const simpleMath2 = new SimpleMath<number, string>(5, "10");
const simpleMath3 = new SimpleMath<number, number>(5, 10);