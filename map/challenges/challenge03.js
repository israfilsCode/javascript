// 🎯 Challenge

// Using your current developer Map:

const developer = new Map([
    ["name", "israfil"],
    ["role", "Full Stack Developer"],
    ["language", "JavaScript"]
]);

// Do these:

// 1. Delete "language"
// 2. Try to delete "email"
// 3. Print the Map
// 4. Print its size

// Predict the two delete() results first.

// Expected final size: 2. 🚀

developer.delete("language");
developer.delete("email");

console.log(developer);
console.log(developer.size);