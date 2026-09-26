const developer = new Map([
    ["name", "israfil"],
    ["role", "Full Stack Developer"],
    ["language", "JavaScript"]
]);

console.log(developer.has("name")) // true
console.log(developer.has("email")) // false