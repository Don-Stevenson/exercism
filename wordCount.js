// # Word Count

// Given a phrase, count the occurrences of each word in that phrase.

// For example for the input `"olly olly in come free"`

// ```text
// olly: 2
// in: 1
// come: 1
// free: 1
// ```


export const countWords = (sentence) => {
  const wordsArr = sentence
    .toLowerCase()
    .replace(/[!!&@$%^&:.]+/g, "")
    .split(/[ ,\n]+/);

  // console.log("words arr:", wordsArr);
  let result = {};
  for (const word of wordsArr) {
    if (result.hasOwnProperty(word)) {
      result[word] = result[word] += 1;
    } else {
      result[word] = 1;
    }
  }
  console.log({ result });
  return result;
};