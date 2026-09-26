const skillsSet = new Set(["JavaScript", "React", "Node.js", "PostgreSQL", "AI"]);

// skillsSet.delete("something")
// It returns true if the value was successfully removed and false if the value wasn't in the Set.

console.log(skillsSet.delete("Python")); // false
console.log(skillsSet.delete("AI")); // true

console.log(skillsSet); // Set(4) {'JavaScript', 'React', 'Node.js', 'PostgreSQL'}