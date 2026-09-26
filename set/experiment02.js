const skills = new Set([
    "JavaScript",
    "React",
    "Nodejs"
]);

console.log(skills); // Set(3) { 'JavaScript', 'React', 'Nodejs' }

console.log(skills.has("JavaScript")); // true
console.log(skills.has("Python")); // false
