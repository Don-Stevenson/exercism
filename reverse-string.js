// # Reverse String

// For example:
// input: "cool"
// output: "looc"
// const string = "hello";
// console.log(string.substr(1), string.charAt(0));

//*************************************************

const reverseString = str => (str === "") ? "" : reverseString(str.substr(1)) + str.charAt(0);

console.log(reverseString("Here"));
