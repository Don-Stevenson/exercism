// # Isogram

// Determine if a word or phrase is an isogram.

// An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter, however spaces and hyphens are allowed to appear multiple times.

// Examples of isograms:

// - lumberjacks
// - background
// - downstream
// - six-year-old

// The word *isograms*, however, is not an isogram, because the s repeats.


export const isIsogram = (word) => {
    // const input = word.split("");
    // console.log({ input });
    // let letterObj = {};
    // for (const letter of input) {
    //   console.log(letter);
    //   if (letterObj.hasOwnProperty(letter)) {
    //     letterObj[letter] = letterObj += 1;
    //     console.log("here");
    //   } else letterObj[letter] = 1;
    // }
    // return letterObj.hasOwnProperty(2) ? false : true;

    const lowerCased = word.toLowerCase();

    const result = lowerCased
      .split("")
      .every((v, i) => lowerCased.indexOf(v) === i);
  
    return result;
  };
  

