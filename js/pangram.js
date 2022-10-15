// # Pangram
// ********

//  Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma,
//  "every letter") is a sentence using every letter of the alphabet at least once.
//  The best known English pangram is:
//  > The quick brown fox jumps over the lazy dog.
//  The alphabet used consists of ASCII letters `a` to `z`, inclusive, and is case
//  insensitive. Input will not contain non-ASCII symbols.
//  ******************************************************************************

const isPangram = text => {
  // make an array of all the letters of the alphabet
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("")
  // for every letter of the alphabet, return true or false if
  // the text parameter, set to lowercase, includes each letter
  return alphabetArr.every(letter => text.toLowerCase().includes(letter))
}
