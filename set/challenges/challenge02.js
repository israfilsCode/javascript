const skills = ["JavaScript", "React", "Node.js", "PostgreSQL"];

const skillsSet = new Set(skills);

console.log(skillsSet.has("Node.js")); // true
console.log(skillsSet.has("Python")); // false