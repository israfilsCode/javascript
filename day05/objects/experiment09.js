const developers = [
    { name: "Israfil", age: 20, role: "Full Stack Developer", language: "JavaScript" },
    { name: "Alice", age: 22, role: "Network Engineer", language: "C++" },
    { name: "Dave Alver", age: 25, role: "AI Engineer", language: "Python" }
];

const olderDevelopers = developers.filter(function (developer) {
    return developer.age > 21;
});

for (const developer of olderDevelopers) {
    console.log(developer.name);
}
