const developers = [
    { name: "Israfil", age: 20, role: "Full Stack Developer", language: "JavaScript" },
    { name: "Alice", age: 22, role: "Network Engineer", language: "C++" },
    { name: "Dave Alver", age: 25, role: "AI Engineer", language: "Python" }
];

for (const developer of developers) {
    if (developer.age > 21) {
        console.log(developer.name + " is " + developer.age + " years old");
    }
}