function calculate(operation: Operation, a: number, b: number): number {
  switch (operation) {
    case "add":
      return a + b;
    case "mul":
      return a * b;
  }
}

// TODO: Adjust this type to resolve compiler errors
type Operation = never;

calculate("add", 1, 2);
calculate("mul", 0, 10);

// @ts-expect-error
calculate("fizbuzz", 1, 1);
