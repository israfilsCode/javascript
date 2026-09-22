const developers = [
    { name: "Israfil", age: 20, role: "Full Stack Developer", language: "JavaScript" },
    { name: "Alice", age: 22, role: "Network Engineer", language: "C++" },
    { name: "Dave Alver", age: 25, role: "AI Engineer", language: "Python" }
];

const searchName = "Dave Alver";
let found = false;

for (const developer of developers) {
    if (developer.name === searchName) {
        found = true;

        console.log("Found: " + developer.name);
        console.log("Role: " + developer.role);
        console.log("Language: " + developer.language);

        break;
    }
}

if (found === false) {
    console.log("Developer not found");
}