// const input = "  JavaScript, React, Node.js, PostgreSQL  ";

// We want to turn it into:

// [
//     "JavaScript",
//     "React",
//     "Node.js",
//     "PostgreSQL"
// ]

const input = "  JavaScript, React, Node.js, PostgreSQL  ";

const output = input.trim().split(",").map(skill => skill.replace(" ", ""));

console.log(output);

