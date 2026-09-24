const developer = {
    name: "Israfil",
    role: "Full Stack Developer"
};

const updatedDeveloper = {
    ...developer,
    experience: "JavaScript",
}

console.log(updatedDeveloper);

// updatedDeveloper would have:
// properties
// name -> "Israfil"        ---------------|
//                                          >---------- come from ...developer
// role -> "Full Stack Developer" ---------|
// experience -> "JavaScript"