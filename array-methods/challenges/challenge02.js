const developers = [
    {
        name: "Israfil",
        age: 20,
        role: "Full Stack Developer",
    },
    {
        name: "Alice",
        age: 22,
        role: "Network Engineer",
    },
    {
        name: "Dave",
        age: 25,
        role: "AI Engineer",
    }
];

const areAllDevsAdult = developers.every(developer => developer.age >= 18);

console.log(areAllDevsAdult);