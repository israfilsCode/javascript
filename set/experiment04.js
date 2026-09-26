// 🧠 One useful property: size

// For a Set, use:

const skillsSet = new Set(["JavaScript", "React", "Node.js", "PostgreSQL", "AI"]);

// skillsSet.size

not:

// skillsSet.length // undefined

Example:

console.log(skillsSet.size);

Output:

5

// This is an important distinction:

// Array → length
// Set   → size