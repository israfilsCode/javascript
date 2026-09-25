const developer = {
    name: "Israfil",
    role: "Full Stack Developer",
    language: "JavaScript",
    experience: 2,
    projects: 5
};

const numericKeys = Object.entries(developer)
    .filter(([, value]) => typeof value === "number")
    .map(([key]) => key);


console.log(numericKeys);


