// # Perfect Numbers
// *****************

// Determine if a number is perfect, abundant, or deficient based on
// Nicomachus' (60 - 120 CE) classification scheme for natural numbers.

// The Greek mathematician [Nicomachus](https://en.wikipedia.org/wiki/Nicomachus)
// devised a classification scheme for natural numbers, identifying each as belonging uniquely to
//  the categories of **perfect**, **abundant**, or **deficient** based on their [aliquot sum]
// (https://en.wikipedia.org/wiki/Aliquot_sum). The aliquot sum is defined as the sum of the
// factors of a number not including the number itself.
// For example, the aliquot sum of 15 is (1 + 3 + 5) = 9

// - **Perfect**: aliquot sum = number
//   - 6 is a perfect number because (1 + 2 + 3) = 6
//   - 28 is a perfect number because (1 + 2 + 4 + 7 + 14) = 28
// - **Abundant**: aliquot sum > number
//   - 12 is an abundant number because (1 + 2 + 3 + 4 + 6) = 16
//   - 24 is an abundant number because (1 + 2 + 3 + 4 + 6 + 8 + 12) = 36
// - **Deficient**: aliquot sum < number
//   - 8 is a deficient number because (1 + 2 + 4) = 7
//   - Prime numbers are deficient

// Implement a way to determine whether a given number is **perfect**.
// Depending on your language track, you may also need
// to implement a way to determine whether a given
// number is **abundant** or **deficient**.
// *******************************************************************

const aliquotSum = n => {
  let sum = 0
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i
  }
  return sum
}

const classify = num => {
  if (num <= 0)
    throw new Error("Classification is only possible for natural numbers.")
  if (num === aliquotSum(num)) return "perfect"
  if (num > aliquotSum(num)) return "deficient"
  if (num < aliquotSum(num)) return "abundant"
}
