// 🎯 Your challenge

// Using the same developer Map, write a for...of loop that prints:

// name → israfil
// role → Full Stack Developer
// language → JavaScript

// Use:

// console.log(`${key} → ${value}`);

// You've already learned every piece needed for this one. 🚀

const developer = new Map();

developer.set("name", "israfil");
developer.set("role", "Full Stack Developer");
developer.set("language", "JavaScript");

for (const [key, value] of developer) {
    console.log(`${key} -> ${value}`);
}