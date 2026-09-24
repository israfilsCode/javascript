const developers = [
    { name: "Israfil", age: 20 },
    { name: "Alice", age: 25 },
    { name: "Dave", age: 22 }
];

developers.sort((developerA, developerB) => developerA.name.localeCompare(developerB.name));

console.log(developers);