// 🎯 Next: Map.keys(), Map.values(), Map.entries()

// Just like objects, a Map can give you its keys and values.

// developer.keys()

// → all keys

// developer.values()

// → all values

// developer.entries()

// → key-value pairs

// For example:

const developer = new Map();

developer.set("name", "Israfil");
developer.set("age", 20);
developer.set("language", "JavaScript");
developer.set("role", "Full Stack Developer");


developer.keys() // returns map iterator


// That's why we can spead them into an array;
console.log([...developer.keys()]);
console.log([...developer.values()]);
console.log([...developer.entries()]);