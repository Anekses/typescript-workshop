var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var password = "Rocky";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var Beeing = /** @class */ (function () {
    function Beeing() {
    }
    return Beeing;
}());
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(age, name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Animal.prototype.move = function (distance) {
        console.log("The " + this.name + " moved " + distance + " meters");
    };
    Animal.prototype.grow = function () {
        this.age++;
    };
    return Animal;
}(Beeing));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(age, name, color, hasChildren) {
        var _this = _super.call(this, age, name) || this;
        _this.color = color;
        _this.hasChildren = hasChildren;
        return _this;
    }
    Object.defineProperty(Dog.prototype, "fullName", {
        get: function () {
            if (password == 'Balboa') {
                return this.name;
            }
            return 'Wrong password!';
        },
        set: function (value) {
            if (value.length > 5) {
                this._fullName = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Dog.prototype.move = function (distance) {
        console.log("The color of dog is: " + Color[this.color]);
        _super.prototype.move.call(this, distance);
    };
    Dog.prototype.bark = function () {
        console.log('Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog(8, "Reksio", Color.Red, false);
dog.move(20);
dog.bark();
console.log(dog.age);
dog.grow();
console.log(dog.age);
