const developers = [
    { name: "Israfil", age: 20, repositories: 7 },
    { name: "Alice", age: 22, repositories: 12 },
    { name: "Dave", age: 25, repositories: 20 },
    { name: "Bob", age: 19, repositories: 4 }
];

// Challenge

// Find the total number of repositories owned by developers older than 20.

function filterDevelopers(developers, callback) {
    const filtered = [];
    for (const developer of developers) {
        if (callback(developer)) {
            filtered.push(developer);
        }
    }

    return filtered;
} 

function reduceDeveloper(developers, callback, initialValue) {
    let accumulator = initialValue;

    for (const developer of developers) {
        accumulator = callback(accumulator, developer);
    }

    return accumulator;
}

const experiencedDevelopers = filterDevelopers(developers, developer => developer.age > 20);
const totalRepositories = reduceDeveloper(experiencedDevelopers, (total, developer) => {
    return total + developer.repositories;
}, 0);

console.log(totalRepositories);
