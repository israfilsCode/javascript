function reduceDevelopers(developers, callback, initialValue) {
    let accumulator = initialValue;
    for (const developer of developers) {
        accumulator = callback(accumulator, developer);
    }

    return accumulator;
}

const developers = [
    { name: "Israfil", age: 20 },
    { name: "Alice", age: 22 },
    { name: "Dave", age: 25 }
];

const totalAge = reduceDevelopers(
    developers,
    (total, developer) => {
        return total + developer.age;
    },
    0
);

console.log(totalAge);