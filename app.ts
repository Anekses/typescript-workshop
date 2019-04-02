//Zadanie 1
console.log('Zadanie 1');
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
class Employee {
    constructor(private firstName: string, private lastName: string) {}

    
    greet(message: string, age: number, check: boolean): string {
        return `${this.firstName} ${this.lastName} says: ${message}`;
    }
}

let emp = new Employee('Mohan Ram', 'Ratnakumar');
emp.greet('hello', 15, true);

//Zadanie 4
console.log('Zadanie 4')
class EmployeeWorker {
    name: string;
}

let empWorker = new EmployeeWorker();
empWorker.name = 'Jan Nowak';
console.log(empWorker.name);
console.log(empWorker.name);

//Zadanie 5
console.log('Zadanie 5')

class EmployeeParameter {
    greet(message: string): string {
        return `Hello ${message}`;
    }
}
const empParameter = new EmployeeParameter();
console.log(empParameter.greet('Jon'));