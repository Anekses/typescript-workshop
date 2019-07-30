1. Podstawowa funkcja
    Dane wejściowe: a, b
    Dane wyjściowe: suma(a,b)

2. Parametry opcjonalne
    Dane wejściowe: a, b, isMultiplication
    Dane wyjściowe: Jeśli isMultiplication !== false ? mnożenie : dzielenie; 
        Jeśli isMultiplication === false i b === 0, zwróc "b jest równe 0";

3. Domyślne wartości
    Dane wejściowe: a, b, Enum operacji matematycznych - domyślnie suma
    Dane wyjściowe: suma, różnica, mnożenie, dzielenie. Jeśli b === 0, od razu return 0;

4. Rest parameters
    Dane wejściowe: cztery stringi "Joseph", "Samuel", "Lucas", "MacKinzie"
    Dane wyjściowe: konkatenacja stringów (ze spacją pomiędzy), gdzie pierwszy z nich jest użyty dwukrotnie (na początku i na końcu)