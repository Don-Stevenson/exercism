// prints numbers 1 to 100
// if number is muliple of 3 print fizz
// if number is muliple of 5 print buzz
// if number is muliple of 3 and 5 print fizzbuzz
// *************************************************

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
    else if (i % 3 === 0) console.log("fizz");
    else if (i % 5 === 0) console.log("buzz");
    else console.log(i);
  }
};

fizzBuzz();
