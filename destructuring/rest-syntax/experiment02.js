const developer = {
    name: "Israfil",
    role: "Full Stack Developer",
    language: "JavaScript",
    database: "PostgreSQL"
};

const {name, ...otherDetails} = developer;

console.log(name);
console.log(otherDetails);