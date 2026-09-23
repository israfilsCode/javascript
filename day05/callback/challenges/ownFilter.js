function filterDevelopers(developers, callback) {
    const filtered = [];
    for (const developer of developers) {
        if (callback(developer)) {
            filtered.push(developer);
        }
    }

    return filtered;
}

const developers = [
    { name: "Israfil", age: 20, role: "Full Stack Developer" },
    { name: "Alice", age: 22, role: "Network Engineer" },
    { name: "Dave", age: 25, role: "AI Engineer" }
];

const experienced = filterDevelopers(developers, (developer) => {
    return developer.age > 21;
});

console.log(experienced);

// filter → callback decides whether to KEEP an element
