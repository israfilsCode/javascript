// A Set is a collection that stores unique values.

// For example:

const skills = [
    "JavaScript",
    "React",
    "JavaScript",
    "Node.js",
    "React"
];

const uniqueSkills = new Set(skills);

console.log(uniqueSkills);

// You'll get something conceptually like:

// Set(3) { "JavaScript", "React", "Node.js" }

// The duplicate values disappear.

// You can convert it back to an array:

const arraySkills = [...new Set(skills)];

console.log(arraySkills);

Output:

["JavaScript", "React", "Node.js"]