const developers = [
    { name: "Israfil", age: 20 },
    { name: "Alice", age: 22 },
    { name: "Dave Alver", age: 25 }
];

const names = developers.map(function (developer) {
    return developer.name;
});

console.log(names);