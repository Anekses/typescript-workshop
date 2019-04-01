//Zadanie 1
var echo = function (data) {
    return data;
};
console.log('Zadanie 1');
console.log(echo(5));
console.log(echo("Cookie"));
// console.log(echo(5).length);
console.log(echo("Cookie").length);
console.log(echo(5).toFixed());
var myIdentity = function (arg) {
    return arg;
};
//BAD!
// let noIdentity: GenericIdentityFn = (arg) => {
//     if (typeof arg == 'boolean') {
//         return 5;
//     }
//     return true;
// }
console.log('Zadanie 3');
var GenericAdd = /** @class */ (function () {
    function GenericAdd() {
    }
    return GenericAdd;
}());
var myGenericNumber = new GenericAdd();
myGenericNumber.baseValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
console.log(myGenericNumber.add(5, 10));
var myGenericString = new GenericAdd();
myGenericString.baseValue = "";
myGenericString.add = function (x, y) { return x + y; };
console.log(myGenericString.add("test ", "ciastko"));
// let myGenericBoolean = new GenericAdd();
// myGenericBoolean.baseValue = false;
// console.log(myGenericBoolean.add(true, false));
//Zadanie 4
var SimpleMath = /** @class */ (function () {
    function SimpleMath(base, multi) {
        this.baseValue = base;
        this.multiplyValue = multi;
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
console.log('Zadanie 4');
var simpleMath = new SimpleMath("5", "10");
// const simpleMath1 = new SimpleMath<string, number>("5", 10);
// const simpleMath2 = new SimpleMath<number, string>(5, "10");
var simpleMath3 = new SimpleMath(5, 10);
