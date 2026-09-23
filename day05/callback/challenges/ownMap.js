function mapDevelopers(developers, callback) {
    const mapped = [];
    for (const developer of developers) {
        mapped.push(callback(developer));
    }

    return mapped;
}

const developers = [
    { name: "Israfil", age: 20, role: "Full Stack Developer" },
    { name: "Alice", age: 22, role: "Network Engineer" },
    { name: "Dave", age: 25, role: "AI Engineer" }
];

const names = mapDevelopers(developers, function (developer) {
    return developer.name;
});

console.log(names);

// map    → callback decides WHAT VALUE to put in the new array