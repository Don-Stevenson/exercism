interface Colour {
  [colour: string]: number
}
interface zerosToAdd {
  [colour: string]: string
}

const resisterObj: Colour = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

const zerosObj: zerosToAdd = {
  black: "",
  brown: "0",
  red: "00",
  orange: "000",
  yellow: "0000",
  green: "00000",
  blue: "000000",
  violet: "0000000",
  grey: "00000000",
  white: "000000000",
}

export const decodedResistorValue = (colours: string[]): string => {
  const [firstColour, secondColour, thirdColour] = colours

  let ohmsSuffix = "ohms"
  let resitenceNum = Number(
    `${resisterObj[firstColour]}${resisterObj[secondColour]}${zerosObj[thirdColour]}`
  )
  if (resitenceNum >= 1000) {
    ohmsSuffix = "kiloohms"
    resitenceNum = resitenceNum / 1000
  }
  return `${resitenceNum} ${ohmsSuffix}`
}
