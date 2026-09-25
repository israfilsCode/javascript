const entries = [
    ["name", "Israfil"],
    ["role", "Full Stack Developer"],
    ["language", "JavaScript"]
];

const developer = Object.fromEntries(entries);

console.log(developer);

// Object.entries():  {name: "Israfil", age: 20} => [["name", "Israfil"], ["age", 20]]
// object.fromEntries():  [["name", "Israfil"], ["age", 20]] => {name: "Israfil", age: 20}