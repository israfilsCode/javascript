const developer = {
    name: "Israfil",
    skills: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    role: "Full Stack Developer"
};

const {name, skills: [firstSkill, ...otherSkills], ...otherDetails} = developer;

console.log(name);
console.log(firstSkill);
console.log(otherSkills);
console.log(otherDetails);