const developer = new Map([
    ["name", "Israfil"],
    ["age", 20],
    ["role", "Full Stack Developer"],
    ["language", "JavaScript"],
]);

console.log(developer.delete("language")); // true
// true  → key existed and was removed
// false → key didn't exist

console.log(developer.has("language")); // false
console.log(developer);