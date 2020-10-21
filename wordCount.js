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
  const wordsArr = sentence.toLowerCase().match(/\b\w+('\w+)?/g);
  let result = {};
  for (const word of wordsArr) {
    if (result.hasOwnProperty(word)) {
      result[word] = result[word] += 1;
    } else result[word] = 1;
  }
  return result;
};

// found solution
// **************
// export const countWords = (text) => {
//   console.log(text.toLowerCase()
//     .match(/\b\w+('\w+)?/g))
//     .reduce((prev, curr) => {
//       (curr in prev)
//         ? prev[curr] += 1
//         : prev[curr] = 1;
//       return prev;
//     }, {});
// };
