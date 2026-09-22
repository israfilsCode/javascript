const developers = [
    {name: "Israfil", age: 20, role: "Full Stack Developer", language: "JavaScript"},
    {name: "Alice", age: 22, role: "Network Engineer", language: "C++"},
    {name: "Dave Alver", age: 25, role: "AI Engineer", language: "Python"}
];

for (const developer of developers) {
    console.log(developer.name + " is a " + developer.role);
}

// Output:
// Israfil is a Full Stack Developer
// Alice is a Network Engineer
// Dave Alver is a AI Engineer