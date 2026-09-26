const developer = new Map();

developer.set("name", "Israfil");
developer.set("age", 20);
developer.set("role", "Full Stack Developer");
developer.set("language", "JavaScript");

console.log([...developer.keys()]);
console.log([...developer.values()]);