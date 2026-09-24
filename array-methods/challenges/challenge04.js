const developers = [
    { name: "Israfil", age: 20 },
    { name: "Alice", age: 22 },
    { name: "Dave", age: 25 }
];

const index = developers.findIndex(developer => developer.age === 25);

console.log(index);