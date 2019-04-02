//Zadanie 1
console.log('Zadanie 1');
var Car = /** @class */ (function () {
    function Car(make) {
        this.make = make;
    }
    return Car;
}());
var car = new Car("Nissan");
console.log(car);
console.log("selfDriving: " + car['selfDrivable']);
//Zadanie 2
var Vechical = /** @class */ (function () {
    function Vechical(make) {
        this.make = make;
    }
    return Vechical;
}());
var vechical = new Vechical("Nissan");
console.log(vechical);
console.log(vechical['wheels']);
//Zadanie 3
console.log('Zadanie 3');
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.greet = function (message, age, check) {
        return this.firstName + " " + this.lastName + " says: " + message;
    };
    return Employee;
}());
var emp = new Employee('Mohan Ram', 'Ratnakumar');
emp.greet('hello', 15, true);
//Zadanie 4
console.log('Zadanie 4');
var EmployeeWorker = /** @class */ (function () {
    function EmployeeWorker() {
    }
    return EmployeeWorker;
}());
var empWorker = new EmployeeWorker();
empWorker.name = 'Jan Nowak';
console.log(empWorker.name);
console.log(empWorker.name);
//Zadanie 5
console.log('Zadanie 5');
var EmployeeParameter = /** @class */ (function () {
    function EmployeeParameter() {
    }
    EmployeeParameter.prototype.greet = function (message) {
        return "Hello " + message;
    };
    return EmployeeParameter;
}());
var empParameter = new EmployeeParameter();
console.log(empParameter.greet('Jon'));
