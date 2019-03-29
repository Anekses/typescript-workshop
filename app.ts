// 1. Podstawowa funkcja
// Dane wejściowe: a, b
// Dane wyjściowe: suma(a,b)
const sum = (a: number, b: number): number => {
    return a + b;
}
console.log("Zadanie 1");
console.log(sum(2,5));

// 2. Parametry opcjonalne
// Dane wejściowe: a, b, isMultiplication
// Dane wyjściowe: Jeśli isMultiplication ? mnożenie : dzielenie; Jeśli isMultiplication == false i b == 0, zwróc "b jest równe 0"; 
const optionalParameters = (a: number, b: number, isMultiplication?: boolean): number | string => {
    if (isMultiplication) {
        return a * b;
    } else if (b != 0) {
        return a / b;
    } else {
        return "b jest równe 0";
    }
}
console.log("Zadanie 2");
console.log(optionalParameters(5, 10, true));
console.log(optionalParameters(5, 10, false));
console.log(optionalParameters(5, 10));
console.log(optionalParameters(5, 0));

// 3. Domyślne wartości
// Dane wejściowe: a, b, Enum operacji matematycznych - domyślnie suma
// Dane wyjściowe: suma, różnica, mnożenie, dzielenie. Jeśli b == 0, od razu return 0;
enum MathOperations { Sum, Diff, Multi, Div};
const defaultParameters = (a: number, b: number, operation: MathOperations = MathOperations.Sum): number => {
    if (b == 0) return 0;
    switch(operation) {
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
console.log("Zadanie 3");
console.log(defaultParameters(5, 10, MathOperations.Sum));
console.log(defaultParameters(5, 10));
console.log(defaultParameters(5, 10, MathOperations.Multi));

// 4. Rest parameters
// Dane wejściowe: cztery stringi "Joseph", "Samuel", "Lucas", "MacKinzie"
// Dane wyjściowe: konkatenacja stringów (ze spacją pomiędzy), gdzie pierwszy z nich jest użyty dwukrotnie (na początku i na końcu)
const restParameters = (firstName: string, ...restOfNames: string[]): string => {
    return firstName + " " + restOfNames.join(" ") + " " + firstName;
}

console.log("Zadanie 4");
console.log(restParameters("Joseph", "Samuel", "Lucas", "MacKinzie"));