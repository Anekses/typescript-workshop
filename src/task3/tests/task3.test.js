const data = require('../task3');

test('check defaultParameters with two numbers and MathOperations as Sum', () => {
    const { defaultParameters, MathOperations } = data;

    const a = 24;
    const b = 8;
    const mathOperations = MathOperations.Sum;
    const prediction = 32;

    const result = defaultParameters(a, b, mathOperations);
    expect(result).toBe(prediction);
});

test('check defaultParameters with two numbers and MathOperations as Diff', () => {
    const { defaultParameters, MathOperations } = data;

    const a = 24;
    const b = 8;
    const mathOperations = MathOperations.Diff;
    const prediction = 16;

    const result = defaultParameters(a, b, mathOperations);
    expect(result).toBe(prediction);
});

test('check defaultParameters with two numbers and MathOperations as Multi', () => {
    const { defaultParameters, MathOperations } = data;

    const a = 24;
    const b = 8;
    const mathOperations = MathOperations.Multi;
    const prediction = 192;

    const result = defaultParameters(a, b, mathOperations);
    expect(result).toBe(prediction);
});

test('check defaultParameters with two numbers and MathOperations as Div', () => {
    const { defaultParameters, MathOperations } = data;

    const a = 24;
    const b = 8;
    const mathOperations = MathOperations.Div;
    const prediction = 3;

    const result = defaultParameters(a, b, mathOperations);
    expect(result).toBe(prediction);
});

test('check defaultParameters with two numbers and without MathOperations', () => {
    const { defaultParameters, MathOperations } = data;

    const a = 24;
    const b = 8;
    const prediction = 32;

    const result = defaultParameters(a, b);
    expect(result).toBe(prediction);
});