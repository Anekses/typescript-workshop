function dropdownComponent<T>(props: Props<T>) {
  const { options, initializer, selected, onChange } = props;
  // Print all options and show which is selected
  options.forEach(option => {
    console.log(`Option: ${option.label}, selected? ${option.value === selected}`);
  });
  // After initializer resolve, fire onChange
  initializer.then(value => {
    onChange(value);
  });
  const randomOption = options[Math.floor(Math.random() * options.length)];
  // Select random element
  onChange(randomOption.value);
}

// TODO: Adjust types of this interface props to resolve compile errors
interface Props<T> {
  options: never;
  initializer: never;
  selected: never;
  onChange: never;
}
