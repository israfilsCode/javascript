// 🧪 Challenge 4 — FizzBuzz

// This is a classic programming exercise.

// Print numbers from 1 to 30.

// But:

// If divisible by 3, print Fizz
// If divisible by 5, print Buzz
// If divisible by both, print FizzBuzz
// Otherwise, print the number

let i = 1;

while (i <= 30) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    
    i++;
}