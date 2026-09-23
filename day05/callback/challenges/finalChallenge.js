const developers = [
    { name: "Israfil", age: 20, role: "Full Stack Developer", repositories: 7 },
    { name: "Alice", age: 22, role: "Network Engineer", repositories: 12 },
    { name: "Dave", age: 25, role: "AI Engineer", repositories: 20 },
    { name: "Bob", age: 19, role: "Frontend Developer", repositories: 4 }
];

// Create an array containing the roles of developers who have more than 10 repositories

const roles = developers.filter(developer => developer.repositories > 10)
                        .map(developer => developer.role);

console.log(roles);