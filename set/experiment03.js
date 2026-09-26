const skills = ["JavaScript", "React", "Node.js", "PostgreSQL"];

const uniqueSkills = new Set(skills);

uniqueSkills.add("Docker");
uniqueSkills.add("React");
uniqueSkills.add("React");
uniqueSkills.add("AI");

console.log(uniqueSkills);