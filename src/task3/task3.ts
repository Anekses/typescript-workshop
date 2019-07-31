// 3. Domyślne wartości
//     Dane wejściowe: a, b, Enum operacji matematycznych - domyślnie suma
//     Dane wyjściowe: suma, różnica, mnożenie, dzielenie. Jeśli b === 0, od razu return 0;

enum MathOperations { Sum, Diff, Multi, Div };
const defaultParameters = (a: number, b: number, operation: MathOperations = MathOperations.Sum): number => {
    if (b == 0) return 0;
    switch (operation) {
        case MathOperations.Sum:
            return a + b;
        case MathOperations.Diff:
            return a - b;
        case MathOperations.Multi:
            return a * b;
        case MathOperations.Div:
            return a / b;
        default:
            return 0;
    }
}

module.exports = { defaultParameters, MathOperations };