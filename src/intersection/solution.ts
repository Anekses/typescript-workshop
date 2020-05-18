interface Person {
  name: string;
  age: number;
}

type HasSalary = { salary: number }

function giveRaise(amount: number, employee: Employee): Employee {
  return {
    ...employee,
    salary: employee.salary + amount
  };
}

// TODO: Adjust this type to resolve compiler errors
type Employee = Person & HasSalary;


giveRaise(100, { name: "John", age: 42, salary: 1000 });
