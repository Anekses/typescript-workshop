"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multi = (a, b) => {
    return a * b;
};
exports.sumNumbers = (a, b, foo) => {
    if (foo) {
        return (a + b + foo).toString();
    }
    return a + b;
};
var MathOperations;
(function (MathOperations) {
    MathOperations[MathOperations["Sum"] = 0] = "Sum";
    MathOperations[MathOperations["Diff"] = 1] = "Diff";
    MathOperations[MathOperations["Multi"] = 2] = "Multi";
    MathOperations[MathOperations["Div"] = 3] = "Div";
})(MathOperations = exports.MathOperations || (exports.MathOperations = {}));
;
exports.calculator = (a = 5, b = 3, operation = MathOperations.Sum) => {
    switch (operation) {
        case MathOperations.Sum:
            return a + b;
        default:
            return 0;
    }
};
exports.sumMultiNumbers = (...numbers) => {
    let result = 0;
    numbers.forEach(number => result += number);
    return result;
};
