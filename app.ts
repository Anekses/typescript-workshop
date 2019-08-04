const sum = (a, b) => {
    const c = 5;
    return a + b;
};

//Opcjonalne parametry
const optionalParameters = (a, b, isMultiplication) => {
    let result = 0;
    if (isMultiplication) {
        result = a * b;
    }
    else if (b !== 0) {
        result = a / b;
    }
    // } else {
    //     result = null;
    //     return 'b jest równe 0';
    // }
    return result;
};

enum MathOperations { Sum, Diff, Multi, Div };
const defaultParameters = (a, b, operation = MathOperations.Sum, additionalParam) => {
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

const restParameters = (firstName, ...restOfNames) => {
    return firstName + " " + restOfNames.join(" ") + " " + firstName;
}

module.exports = { sum, optionalParameters, defaultParameters, MathOperations, restParameters };