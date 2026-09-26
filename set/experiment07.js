const frontendSkills = new Set([
    "JavaScript",
    "React",
    "CSS"
]);

const backendSkills = new Set([
    "Node.js",
    "PostgreSQL",
    "JavaScript"
]);

const skills = [...new Set([...frontendSkills, ...backendSkills])];

console.log(skills);