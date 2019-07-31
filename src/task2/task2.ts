// 2. Parametry opcjonalne
//     Dane wejściowe: a, b, isMultiplication
//     Dane wyjściowe: Jeśli isMultiplication !== false ? mnożenie : dzielenie; 
//         Jeśli isMultiplication === false i b === 0, zwróc "b jest równe 0";

const optionalParameters = (a: number, b: number, isMultiplication?: boolean): number | string => {
    if (isMultiplication) {
        return a * b;
    } else if (b !== 0) {
        return a / b;
    } else {
        return 'b jest równe 0';
    }
}

module.exports = optionalParameters;