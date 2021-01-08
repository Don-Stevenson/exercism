// # Two Fer
// *********

// `Two-fer` or `2-fer` is short for two for one. One for you and one for me.
// Given a name, return a string with the message:
// ```text
// One for X, one for me.
// ```
// Where X is the given name.
// However, if the name is missing, return the string:
// ```text
// One for you, one for me.
// ```
// Here are some examples:
// |Name    |String to return 
// |:-------|:------------------
// |Alice   |One for Alice, one for me. 
// |Bob     |One for Bob, one for me.
// |        |One for you, one for me.
// |Zaphod  |One for Zaphod, one for me.
// *************************************

// solution with providing name variable a default value if nothing else is provided
// *********************************************************************************

const twoFer = (name = "you") => `One for ${name}, one for me.`
