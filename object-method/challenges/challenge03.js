const developer = {
    name: "Israfil",
    role: "Full Stack Developer",
    experience: 2,
    projects: 5
};

// Create a new object where only numeric values are doubled, while the strings stay unchanged.

const updatedDeveloperEntries = Object.entries(developer).map(([key, value]) => {
    if (typeof value === "number") {
        return [key, value * 2]
    }

    return [key, value];
});

const updatedDeveloper = Object.fromEntries(updatedDeveloperEntries);

console.log(updatedDeveloper);