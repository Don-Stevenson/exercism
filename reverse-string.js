// # Reverse String

// For example:
// input: "cool"
// output: "looc"

export const reverseString = str => (str === "") ? "" : reverseString(str.substr(1)) + str.charAt(0)