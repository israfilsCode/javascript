const developer = {
    name: "Israfil",
    skills: ["JavaScript", "React", "Node.js", "PostgreSQL"]
};

const {name, skills: [firstSkill, , , lastSkill]} = developer;

console.log(name);
console.log(firstSkill);
console.log(lastSkill);