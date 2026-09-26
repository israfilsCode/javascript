const developer = new Map([
    ["name", "Israfil"],
    ["role", "Full Stack Developer"],
    ["language", "JavaScript"],
]);

console.log(developer.size); // 3

for (const [key, value] of developer) {
    console.log(`${key} ==> ${value}`);
}