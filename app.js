var password = "Rocky";
var Beeing = /** @class */ (function () {
    function Beeing() {
    }
    return Beeing;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distance) {
        console.log("The " + name + " moved " + distance + " meters");
    };
    return Animal;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.move = function (distance) {
        console.log("The " + name + " moved " + distance + " meters");
    };
    Dog.prototype.bark = function () {
        console.log('Woof!');
    };
    return Dog;
}());
