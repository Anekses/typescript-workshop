const { restParameters } = require('../../../app');

test('check restParameters with multiple strings', () => {
    const a = 'Joseph';
    const b = 'Samuel';
    const c = 'Lucas';
    const d = 'MacKinzie';
    const prediction = 'Joseph Samuel Lucas MacKinzie Joseph';

    const result = restParameters(a, b, c, d);
    expect(result).toBe(prediction);
});
