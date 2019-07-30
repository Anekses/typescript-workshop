const multi = require('../task1').multi;

test('check multi with numbers', () => {
    const a = 5;
    const b = 8;
    const prediction = 40;

    const result = multi(a, b);
    expect(result).toBe(prediction);
})