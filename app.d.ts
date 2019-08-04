declare const sum: (a: number, b: number) => number;
declare const optionalParameters: (a: number, b: number, isMultiplication: boolean) => number | "b jest równe 0";
declare enum MathOperations {
    Sum = 0,
    Diff = 1,
    Multi = 2,
    Div = 3
}
declare const defaultParameters: (a: number, b: number, operation?: MathOperations) => number;
declare const restParameters: (firstName: string, ...restOfNames: any[]) => string;
