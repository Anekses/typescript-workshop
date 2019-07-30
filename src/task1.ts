const multi = (a: number, b: number): number => {
    return a * b;
}

const sumNumbers = (a: number, b: number, foo?: number): number | string => {
    if (foo) {
        return (a + b + foo).toString();
    }
    return a + b;
}

enum MathOperations { Sum, Diff, Multi, Div };
const calculator = (a: number = 5, b: number = 3, operation: MathOperations = MathOperations.Sum): number => {
    switch (operation) {
        case MathOperations.Sum:
            return a + b;
        default:
            return 0;
    }
}

const sumMultiNumbers = (...numbers: number[]): number => {
    let result = 0;
    numbers.forEach(number => result += number);

    return result;
}