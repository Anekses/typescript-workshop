//Zadanie 1
var echo = function (data) {
    return data;
};
console.log('Zadanie 1');
console.log(echo(5));
console.log(echo("Cookie"));
console.log(echo(5).length);
console.log(echo("Cookie").length);
// console.log(echo(5).toFixed());
// console.log(echo("Cookie").toFixed());
//Zadanie 2
var myIdentity = function (arg) {
    return arg;
};
var noIdentity = function (arg) {
    if (typeof arg == 'boolean') {
        return 5;
    }
    return true;
};
//Zadanie 3
var GenericAdd = /** @class */ (function () {
    function GenericAdd() {
    }
    GenericAdd.prototype.add = function (x, y) {
        return x + y;
    };
    return GenericAdd;
}());
console.log('Zadanie 3');
var myGenericNumber = new GenericAdd();
myGenericNumber.baseValue = 0;
console.log(myGenericNumber.add(5, 10));
var myGenericString = new GenericAdd();
myGenericString.baseValue = "";
console.log(myGenericString.add("test ", "ciastko"));
var myGenericBoolean = new GenericAdd();
myGenericBoolean.baseValue = false;
console.log(myGenericBoolean.add(true, false));
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
var simpleMath1 = new SimpleMath("5", 10);
var simpleMath2 = new SimpleMath(5, "10");
var simpleMath3 = new SimpleMath(5, 10);
