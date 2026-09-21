const numbers = [10, 20, 30, 40, 50];

let total = 0;

for (const number of numbers) {
    total = total + number;
}

const average = total/numbers.length;

console.log(average);