function calculateVolume(shape: Shape): number {
  switch (shape.kind) {
    case "sphere":
      return Math.PI * Math.pow(shape.radius, 3) * 4 / 3;
    case "cylinder":
      return Math.PI * Math.pow(shape.radius, 2) * shape.height;
    case "cone":
          return Math.PI * Math.pow(shape.radius, 2) * shape.height * 1 / 3;
    case "cube":
      return Math.pow(shape.length, 3);
  }
}

calculateVolume({ kind: "cube", length: 100 });
calculateVolume({ kind: "cone", radius: 50, height: 100 });
calculateVolume({ kind: "sphere", radius: 100 });
calculateVolume({ kind: "cylinder", radius: 200, height: 100 });

// TODO: implement this type as Discriminated union to resolve compile errors
type Shape = never;
