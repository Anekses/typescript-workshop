//Zadanie 1
let echo = (data) => {
    return data;
}

console.log('Zadanie 1')
console.log(echo(5));
console.log(echo("Cookie"));

console.log(echo(5).length);
console.log(echo("Cookie").length);

// console.log(echo(5).toFixed());
// console.log(echo("Cookie").toFixed());

//Zadanie 2
let myIdentity = (arg) => {
    return arg;
}

let noIdentity = (arg) => {
    if (typeof arg == 'boolean') {
        return 5;
    }
    return true;
}

//Zadanie 3
class GenericAdd {
    baseValue;
    add(x, y) {
        return x + y;
    }
}

console.log('Zadanie 3')

let myGenericNumber = new GenericAdd();
myGenericNumber.baseValue = 0;
console.log(myGenericNumber.add(5, 10));

let myGenericString = new GenericAdd();
myGenericString.baseValue = "";
console.log(myGenericString.add("test ", "ciastko"));

let myGenericBoolean = new GenericAdd();
myGenericBoolean.baseValue = false;
console.log(myGenericBoolean.add(true, false));

//Zadanie 4
class SimpleMath {
    baseValue;
    multiplyValue;

    constructor(base, multi) {
        this.baseValue = base;
        this.multiplyValue = multi;
    }

    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

console.log('Zadanie 4')

const simpleMath = new SimpleMath("5", "10");
const simpleMath1 = new SimpleMath("5", 10);
const simpleMath2 = new SimpleMath(5, "10");
const simpleMath3 = new SimpleMath(5, 10);