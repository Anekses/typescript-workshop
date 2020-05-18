function logPrimitivePair(a: Argument, b: Argument): void {
  console.log(`(${a}, ${b})`);
}

// TODO: Adjust this type to resolve compiler errors
type Argument = string | number | boolean;


logPrimitivePair(1, 1.23);
logPrimitivePair("aaaa", true);

// @ts-expect-error
logPrimitivePair({}, window);
