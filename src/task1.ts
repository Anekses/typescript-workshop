export const multi = (a: number, b: number): number => {
    return a * b;
}

export const sumNumbers = (a: number, b: number, foo?: number): number | string => {
    if (foo) {
        return (a + b + foo).toString();
    }
    return a + b;
}

export enum MathOperations { Sum, Diff, Multi, Div };
export const calculator = (a: number = 5, b: number = 3, operation: MathOperations = MathOperations.Sum): number => {
    switch (operation) {
        case MathOperations.Sum:
            return a + b;
        default:
            return 0;
    }
}

export const sumMultiNumbers = (...numbers: number[]): number => {
    let result = 0;
    numbers.forEach(number => result += number);

    return result;
}