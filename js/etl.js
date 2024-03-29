// # ETL
// ******
// We are going to do the `Transform` step of an Extract-Transform-Load.

// ### ETL
// Extract-Transform-Load (ETL)

// ### The goal
// We're going to extract some scrabble scores from a legacy system.
// The old system stored a list of letters per score:

// - 1 point: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
// - 2 points: "D", "G",
// - 3 points: "B", "C", "M", "P",
// - 4 points: "F", "H", "V", "W", "Y",
// - 5 points: "K",
// - 8 points: "J", "X",
// - 10 points: "Q", "Z",

// The shiny new scrabble system instead stores the score per letter, which
// makes it much faster and easier to calculate the score for a word. It
// also stores the letters in lower-case regardless of the case of the
// input letters:

// - "a" is worth 1 point.
// - "b" is worth 3 points.
// - "c" is worth 3 points.
// - "d" is worth 2 points.
// - Etc.
// *************************

const transform = letters => {
  let transformedData = {}
  for (const key in letters) {
    for (const values of letters[key]) {
      transformedData[values.toLowerCase()] = parseInt(key)
    }
  }
  return transformedData
}
