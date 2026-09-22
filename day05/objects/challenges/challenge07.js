const developers = [
    { name: "Israfil", age: 20, role: "Full Stack Developer", language: "JavaScript" },
    { name: "Alice", age: 22, role: "Network Engineer", language: "C++" },
    { name: "Dave Alver", age: 25, role: "AI Engineer", language: "Python" }
];

const searchName = "Dave Alver";

for (const developer of developers) {
    console.log("check " + developer.name);
    if (developer.name === searchName) {

        console.log("FOUND ✅");
        break;
    }
}