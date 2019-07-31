const sum = require('../task1');

test('check sum with numbers', () => {
    const a = 5;
    const b = 8;
    const prediction = 13;

    const result = sum(a, b);
    expect(result).toBe(prediction);
});