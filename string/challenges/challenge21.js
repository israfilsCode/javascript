// 🎯 Let's put your string skills together

// Here's a realistic little task.

// Given:

// const rawSkills = "  JavaScript, react, NODE.js, postgresql  ";

// Transform it into:

// [
//     "JAVASCRIPT",
//     "REACT",
//     "NODE.JS",
//     "POSTGRESQL"
// ]

// Use the methods you've already learned:

// trim()
// → split()
// → map()
// → trim()
// → toUpperCase()

// You can combine the operations inside the map() callback.

const rawSkills = "  JavaScript, react, NODE.js, postgresql  ";

const arraySkills = rawSkills.trim().split(",").map(skill => skill.trim().toUpperCase()).filter(Boolean);

console.log(arraySkills);