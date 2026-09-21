const numbers = [4, 15, 7, 22, 9, 30, 12];

let greaterCount = 0;

for (const number of numbers) {
    if (number > 10) {
        greaterCount++;
    }
}

console.log(greaterCount);