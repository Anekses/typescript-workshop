//Zadanie 1
console.log('Zadanie 1');
let SelfDriving = (constructorFunction: Function) => {
    constructorFunction.prototype.selfDrivable = true;
}

@SelfDriving
class Car {
    public make: string;
    constructor(make: string) {
        this.make = make;
    }
}

let car: Car = new Car("Nissan");
console.log(car);
console.log(`selfDriving: ${car['selfDrivable']}`);


//Zadanie 2
console.log('Zadanie 2');
function Wheels(numOfWheels: number) {
    return function (constructor: Function) {
        constructor.prototype.wheels = numOfWheels;
    }
}

@Wheels(4)
class Vechical {
    public make: string;
    constructor(make: string) {
        this.make = make;
    }
}

let vechical: Vechical = new Vechical("Nissan");
console.log(vechical);
console.log(vechical['wheels']);


//Zadanie 3
console.log('Zadanie 3');
function logMethod(target: Object, propertyName: string, propertyDesciptor: PropertyDescriptor): PropertyDescriptor {
    // target === Employee.prototype
    // propertyName === "greet"
    // propertyDesciptor === Object.getOwnPropertyDescriptor(Employee.prototype, "greet")
    const method = propertyDesciptor.value;

    propertyDesciptor.value = function (...args: any[]) {
        const params = args.map(a => JSON.stringify(a)).join();
        const result = method.apply(this, args);
        const r = JSON.stringify(result);

        console.log(`Call: ${propertyName}(${params}) => ${r}`);

        return result;
    }
    return propertyDesciptor;
};

class Employee {
    constructor(private firstName: string, private lastName: string) {}

    @logMethod
    greet(message: string, age: number, check: boolean): string {
        return `${this.firstName} ${this.lastName} says: ${message}`;
    }
}

let emp = new Employee('Mohan Ram', 'Ratnakumar');
emp.greet('hello', 15, true);

//Zadanie 4
console.log('Zadanie 4')
let logProperties = (target: Object, propertyName: string) => {
    let val = this[propertyName];
    
    const getter = () => {
        console.log(`GET: ${propertyName} => ${val}`);
        return val;
    }

    const setter = newVal => {
        console.log(`SET: ${propertyName} => ${newVal}`);
        val = newVal;
    }
    
    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

class EmployeeWorker {
    @logProperties
    name: string;
}

let empWorker = new EmployeeWorker();
empWorker.name = 'Jan Nowak';
console.log(empWorker.name);
console.log(empWorker.name);

//Zadanie 5
console.log('Zadanie 5')
function logParameter(target: Object, methodName: string, index: number) {
    const metadataKey = `log_${methodName}_parameters`;
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

class EmployeeParameter {
    greet(@logParameter message: string): string {
        return `Hello ${message}`;
    }
}
const empParameter = new EmployeeParameter();
console.log(empParameter.greet('Jon'));