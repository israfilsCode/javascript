// iterating over a Set

// A Set can be used with for...of just like an array:

const skillsSet = new Set([
    "JavaScript",
    "React",
    "Node.js"
]);

for (const skill of skillsSet) {
    console.log(skill);
}