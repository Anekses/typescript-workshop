// 4. Rest parameters
//     Dane wejściowe: cztery stringi "Joseph", "Samuel", "Lucas", "MacKinzie"
//     Dane wyjściowe: konkatenacja stringów (ze spacją pomiędzy), gdzie pierwszy z nich jest użyty dwukrotnie (na początku i na końcu)
const restParameters = (firstName, ...restOfNames) => {
    return firstName + " " + restOfNames.join(" ") + " " + firstName;
};
module.exports = restParameters;
