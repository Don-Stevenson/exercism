//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// # Gigasecond
//
// Given a moment, determine the moment that would be after a gigasecond
// has passed.
// A gigasecond is 10^9 (1,000,000,000) seconds.
// It is possible to return a correct value for this exercise by mutating
// the solution function argument. Although there are legitimate use cases for
// mutating function arguments, this is usually undesirable, and in the case of this exercise,
// clearly unexpected. For this reason, the test suite has a test that fails in
// case the argument has been modified after the function execution.
// ******************************************************************************************

const MILLI = 1000;
const BILLION = 1e9;

const gigasecond = (moment) => new Date(moment.getTime() + MILLI * BILLION);
