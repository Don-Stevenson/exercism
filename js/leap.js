// # Leap
// ******

// Given a year, report if it is a leap year.
// The tricky thing here is that a leap year in the Gregorian calendar occurs:
// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year is also evenly divisible by 400
// For example, 1997 is not a leap year, but 1996 is.  1900 is not a leap
// year, but 2000 is.

// ## Notes
// Though our exercise adopts some very simple rules, there is more to learn!
// For a delightful, four minute explanation of the whole leap year
// phenomenon, go watch [this youtube video][video].
// [video]: http://www.youtube.com/watch?v=xX96xng7sAE

// 1 If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// 2 If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// 3 If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// 4 The year is a leap year (it has 366 days).
// 5 The year is not a leap year (it has 365 days).
// ******************************************************************************

const isLeap = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
