const developers = [
    { name: "Israfil", age: 20 },
    { name: "Alice", age: 22 },
    { name: "Dave", age: 24 }
];

const hasSeniorDeveloper = developers.some(
    developer => developer.age >= 25
);

console.log(hasSeniorDeveloper);

// some()
// "Does at least ONE element satisfy this condition?"