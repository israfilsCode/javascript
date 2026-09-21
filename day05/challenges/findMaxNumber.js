const numbers = [12, 45, 7, 89, 23, 56];

// let max = 0; // this will not work if numbers array contains negative numbers
let max = numbers[0]; // this is a better approach

for (const number of numbers) {
    if (number > max) {
        max = number;
    }
}

console.log(max);