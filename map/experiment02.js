const developerObj = {
    name: "Israfil",
    age: 20,
    language: "JavaScript",
    role: "Full Stack Developer"
};

const developerMap = new Map(Object.entries(developerObj));

console.log(developerMap.has("skills")); // false
console.log(developerMap.has("role")); // true

