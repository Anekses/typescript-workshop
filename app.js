const sum = (a, b) => {
    return a + b;
};
const optionalParameters = (a, b, isMultiplication) => {
    let result = 0;
    if (isMultiplication) {
        result = a * b;
    }
    else if (b !== 0) {
        result = a / b;
    }
    else {
        result = null;
        return 'b jest równe 0';
    }
    return result;
};
var MathOperations;
(function (MathOperations) {
    MathOperations[MathOperations["Sum"] = 0] = "Sum";
    MathOperations[MathOperations["Diff"] = 1] = "Diff";
    MathOperations[MathOperations["Multi"] = 2] = "Multi";
    MathOperations[MathOperations["Div"] = 3] = "Div";
})(MathOperations || (MathOperations = {}));
;
const defaultParameters = (a, b, operation = MathOperations.Sum) => {
    if (b == 0)
        return 0;
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
};
const restParameters = (firstName, ...restOfNames) => {
    return firstName + " " + restOfNames.join(" ") + " " + firstName;
};
module.exports = { sum, optionalParameters, defaultParameters, MathOperations, restParameters };
//# sourceMappingURL=app.js.map