// 🎯 Final Map challenge

// Let's combine everything.

// Given:

const developers = new Map([
    ["Israfil", 20],
    ["Alice", 22],
    ["Dave", 25]
]);

// Create an array containing only the developers whose age is greater than 20.

// Expected:

// [
//     ["Alice", 22],
//     ["Dave", 25]
// ]

const experienceDevelopers = [...developers.entries()].filter(([, age]) => age > 20);

console.log(experienceDevelopers);