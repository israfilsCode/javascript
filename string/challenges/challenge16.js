const input = " JavaScript, , React, , Node.js, PostgreSQL ";

// const output = input.trim().split(",").map(skill => skill.trim()).filter(skill => skill !== "");
const output = input.trim().split(",").map(skill => skill.trim()).filter(Boolean);

console.log(output);