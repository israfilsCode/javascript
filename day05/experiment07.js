const developers = [
    { name: "Israfil", repositories: 7 },
    { name: "Alice", repositories: 12 },
    { name: "Dave", repositories: 20 }
];

const totalRepositories = developers.reduce((accumulator, developer) => accumulator + developer.repositories, 0);

console.log(totalRepositories);