// # Isogram
// *********

// Determine if a word or phrase is an isogram.
// An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter,
// however spaces and hyphens are allowed to appear multiple times.
//
// Examples of isograms:
// - lumberjacks
// - background
// - downstream
// - six-year-old
// The word *isograms*, however, is not an isogram, because the s repeats
// **********************************************************************

export const isIsogram = word => {
  if (!word) true
  const lowerCaseCleaned = word
    .toLowerCase()
    .match(/\b\w+('\w+)?/g)
    .join("")
  return lowerCaseCleaned
    .split("")
    .every((value, index) => lowerCaseCleaned.indexOf(value) === index)
}

console.log(isIsogram("background"))
