var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _this = this;
//Zadanie 1
console.log('Zadanie 1');
var SelfDriving = function (constructorFunction) {
    constructorFunction.prototype.selfDrivable = true;
};
var Car = /** @class */ (function () {
    function Car(make) {
        this.make = make;
    }
    Car = __decorate([
        SelfDriving
    ], Car);
    return Car;
}());
var car = new Car("Nissan");
console.log(car);
console.log("selfDriving: " + car['selfDrivable']);
//Zadanie 2
console.log('Zadanie 2');
function Wheels(numOfWheels) {
    return function (constructor) {
        constructor.prototype.wheels = numOfWheels;
    };
}
var Vechical = /** @class */ (function () {
    function Vechical(make) {
        this.make = make;
    }
    Vechical = __decorate([
        Wheels(4)
    ], Vechical);
    return Vechical;
}());
var vechical = new Vechical("Nissan");
console.log(vechical);
console.log(vechical['wheels']);
//Zadanie 3
console.log('Zadanie 3');
function logMethod(target, propertyName, propertyDesciptor) {
    // target === Employee.prototype
    // propertyName === "greet"
    // propertyDesciptor === Object.getOwnPropertyDescriptor(Employee.prototype, "greet")
    var method = propertyDesciptor.value;
    propertyDesciptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var params = args.map(function (a) { return JSON.stringify(a); }).join();
        var result = method.apply(this, args);
        var r = JSON.stringify(result);
        console.log("Call: " + propertyName + "(" + params + ") => " + r);
        return result;
    };
    return propertyDesciptor;
}
;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.greet = function (message, age, check) {
        return this.firstName + " " + this.lastName + " says: " + message;
    };
    __decorate([
        logMethod
    ], Employee.prototype, "greet", null);
    return Employee;
}());
var emp = new Employee('Mohan Ram', 'Ratnakumar');
emp.greet('hello', 15, true);
//Zadanie 4
console.log('Zadanie 4');
var logProperties = function (target, propertyName) {
    var val = _this[propertyName];
    var getter = function () {
        console.log("GET: " + propertyName + " => " + val);
        return val;
    };
    var setter = function (newVal) {
        console.log("SET: " + propertyName + " => " + newVal);
        val = newVal;
    };
    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
};
var EmployeeWorker = /** @class */ (function () {
    function EmployeeWorker() {
    }
    __decorate([
        logProperties
    ], EmployeeWorker.prototype, "name", void 0);
    return EmployeeWorker;
}());
var empWorker = new EmployeeWorker();
empWorker.name = 'Jan Nowak';
console.log(empWorker.name);
console.log(empWorker.name);
//Zadanie 5
console.log('Zadanie 5');
function logParameter(target, methodName, index) {
    var metadataKey = "log_" + methodName + "_parameters";
    console.log(target);
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
    console.log("Target: ");
    console.log(target);
    console.log("MethodName: " + methodName);
    console.log("Index: " + index);
}
var EmployeeParameter = /** @class */ (function () {
    function EmployeeParameter() {
    }
    EmployeeParameter.prototype.greet = function (message) {
        return "Hello " + message;
    };
    __decorate([
        __param(0, logParameter)
    ], EmployeeParameter.prototype, "greet", null);
    return EmployeeParameter;
}());
var empParameter = new EmployeeParameter();
console.log(empParameter.greet('Jon'));
