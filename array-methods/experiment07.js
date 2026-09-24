const developers = [
    { name: "Israfil", skills: ["JavaScript", "React"] },
    { name: "Alice", skills: ["C++", "Networking"] }
];


const allSkills = developers.flatMap(developer => developer.skills);

console.log(allSkills);