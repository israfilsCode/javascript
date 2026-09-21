const numbers = [3, 8, 12, 7, 15, 20, 9, 4];

let evenNumbersCount = 0;

for (const number of numbers) {
    if (number % 2 === 0) {
        evenNumbersCount++;
    }
}

console.log(evenNumbersCount);