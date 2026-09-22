const developers = [
    { name: "Israfil", age: 20, role: "Full Stack Developer" },
    { name: "Alice", age: 22, role: "Network Engineer" },
    { name: "Dave Alver", age: 25, role: "AI Engineer" }
];

const developer = developers.find(function (developer) {
    // return developer.name === "Dave Alver";
    return developer.name === "John"; 
});

console.log(developer); // undefined
// console.log(developer.role);
// console.log(developer.age);