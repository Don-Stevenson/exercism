interface Colour {
  [c: string]: number;
}

const resisterObj: Colour = {
  Black: 0,
  Brown: 1,
  Red: 2,
  Orange: 3,
  Yellow: 4,
  Green: 5,
  Blue: 6,
  Violet: 7,
  Grey: 8,
  White: 9,
};

export function decodedValue(colours: string[]): number {
  if (colours.length < 2) {
    throw "At least two colors need to be present";
  }
  const [firstColour, secondColour] = colours;
  console.log(`${resisterObj[firstColour]}${resisterObj[secondColour]}`);
  return Number(`${resisterObj[firstColour]}${resisterObj[secondColour]}`);
}
