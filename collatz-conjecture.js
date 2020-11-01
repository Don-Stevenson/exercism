//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// # Collatz Conjecture

// The Collatz Conjecture or 3x+1 problem can be summarized as follows:

// Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is
// odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely.
// The conjecture states that no matter which number you start with, you will
// always reach 1 eventually.

// Given a number n, return the number of steps required to reach 1.

// ## Examples

// Starting with n = 12, the steps would be as follows:

// 0. 12
// 1. 6
// 2. 3
// 3. 10
// 4. 5
// 5. 16
// 6. 8
// 7. 4
// 8. 2
// 9. 1

// Resulting in 9 steps. So for input n = 12, the return value would be 9.
// ***********************************************************************

// 1st working solution
// ********************

// export const steps = n => {
//   if (n <= 0) throw new Error("Only positive numbers are allowed");
//   let count = 0;
//   while (n > 1) {
//     if (n % 2 === 0) {
//       // console.log("here in even");
//       count++;
//       n /= 2;
//     } else {
//       count++;
//       // console.log("here in odd");
//       n = 3 * n + 1;
//     }
//   }
//   return count;
// };

// Submitted solution
// ******************
const steps = (n, count = 0) => {
  if (n <= 0) throw new Error("Only positive numbers are allowed");
  if (n === 1) return count;
  return steps(n % 2 === 0 ? n / 2 : 3 * n + 1, count + 1);
};
