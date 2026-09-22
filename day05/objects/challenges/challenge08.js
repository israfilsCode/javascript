const developers = [
    { name: "Israfil", age: 20, role: "Full Stack Developer", language: "JavaScript" },
    { name: "Alice", age: 22, role: "Network Engineer", language: "C++" },
    { name: "Dave Alver", age: 25, role: "AI Engineer", language: "Python" }
];

const developer = developers.find(function (developer) {
    return developer.language === "Python";
});

console.log(developer.name);
console.log(developer.role);