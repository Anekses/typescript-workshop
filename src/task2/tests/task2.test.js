const optionalParameters = require('../task2');

test('check optionalParameters with two numbers and isMultiplication true', () => {
    const a = 24;
    const b = 8;
    const isMultiplication = true;
    const prediction = 192;

    const result = optionalParameters(a, b, isMultiplication);
    expect(result).toBe(prediction);
});

test('check optionalParameters with two numbers and isMultiplication false', () => {
    const a = 24;
    const b = 8;
    const isMultiplication = false;
    const prediction = 3;

    const result = optionalParameters(a, b, isMultiplication);
    expect(result).toBe(prediction);
});

test('check optionalParameters with two numbers and without isMultiplication', () => {
    const a = 24;
    const b = 8;
    const prediction = 3;

    const result = optionalParameters(a, b);
    expect(result).toBe(prediction);
});

test('check optionalParameters with two numbers, where the second number is 0', () => {
    const a = 24;
    const b = 0;
    const prediction = 'b jest równe 0';

    const result = optionalParameters(a, b);
    expect(result).toBe(prediction);
});