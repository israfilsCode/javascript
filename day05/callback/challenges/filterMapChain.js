const developers = [
    { name: "Israfil", age: 20, repositories: 7 },
    { name: "Alice", age: 22, repositories: 12 },
    { name: "Dave", age: 25, repositories: 20 },
    { name: "Bob", age: 19, repositories: 4 }
];

const names = developers.filter(developer => developer.age > 20)
                        .map(developer => developer.name);

console.log(names);