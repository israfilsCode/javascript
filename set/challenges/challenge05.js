// Challenge

// Given:

const skillsSet = new Set([
    "JavaScript",
    "React",
    "Node.js",
    "PostgreSQL"
]);

// Use for...of to print each skill in this format:

// Skill: JavaScript
// Skill: React
// Skill: Node.js
// Skill: PostgreSQL

for (const skill of skillsSet) {
    console.log(`Skill: ${skill}`);
}