// Your challenge 🚀

// Using your current skillsSet:

const skillsSet = new Set([
    "JavaScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "Docker"
]);

// Delete "Docker".
// Try to delete "Python".
// Print the Set.
// Print its size.

// Predict the two delete() return values first.

console.log(skillsSet.delete("Docker")); // true
console.log(skillsSet.delete("Python")); // false
console.log(skillsSet); // Set(4) {'JavaScript', 'React', 'Node.js', 'PostgreSQL'}
console.log(skillsSet.size); // 4


// 🧠 One useful detail about delete()

// It returns a boolean:

// skillsSet.delete("Docker");

// → true because "Docker" existed and was removed.

// skillsSet.delete("Python");

// → false because "Python" wasn't in the Set.