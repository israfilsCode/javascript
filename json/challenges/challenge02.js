const developer = {
    name: "Israfil",
    role: "Full Stack Developer",
    skills: ["JavaScript", "React", "Node.js"]
};

// object
// → JSON.stringify()
// → JSON.parse()
// → new object

const jsonData = JSON.stringify(developer);

const restoredDeveloper = JSON.parse(jsonData);

console.log(restoredDeveloper.name); // Israfil
console.log(restoredDeveloper.skills); // [ 'JavaScript', 'React', 'Node.js' ]
console.log(typeof restoredDeveloper); // object