const numbers = [12, 5, 8, 21, 34, 7, 16, 3, 40];

let max = numbers[0];
let min = numbers[0];
let total = 0;
let evenCount = 0;
let greaterCount = 0;

for (const number of numbers) {
    if (number > max) {
        max = number;
    }

    if (number < min) {
        min = number;
    }

    if (number % 2 === 0) {
        evenCount++;
    }

    if (number > 10) {
        greaterCount++;
    }

    total = total + number;
}

const average = total/numbers.length;

console.log("The largest number is " + max);
console.log("The smallest number is " + min);
console.log("The total is " + total);
console.log("The average is " + average);
console.log(evenCount + " numbers are even")
console.log(greaterCount + " numbers are greater than 10");