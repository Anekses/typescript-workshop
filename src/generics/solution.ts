// TODO: Adjust type to resolve compiler errors (tip: use generic)
function capitalizeLabel<T extends { label: string }>(o: T): T {
  return {
    ...o,
    label: o.label.toUpperCase()
  }
};

const a = capitalizeLabel({ label: "foobar", id: 100 });
console.log(a.id * 2);

const b = capitalizeLabel({ label: "qvux", hasNext: true });
console.log(b.hasNext === true);
