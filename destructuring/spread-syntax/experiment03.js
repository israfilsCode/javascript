const developer = {
    name: "Israfil",
    role: "Full Stack Developer",
    experience: 1
};

const updatedDeveloper = {
    ...developer,
    experience: 2
};

console.log(updatedDeveloper);

// here is we are spreading developer object to updatedDeveloper object.
// first updated developer copies properties from developer object the updating experience property 