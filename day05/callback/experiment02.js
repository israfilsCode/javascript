function processDevelopers(developers, callback) {
    for (const developer of developers) {
        callback(developer);
    }
}

const developers = [
    { name: "Israfil", role: "Full Stack Developer" },
    { name: "Alice", role: "Network Engineer" },
    { name: "Dave", role: "AI Engineer" }
];

processDevelopers(developers, (developer) => {
    console.log(developer.name + " -> " + developer.role);
});