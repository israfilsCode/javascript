const developers = [
    {
        name: "Israfil",
        skills: ["JavaScript", "React"]
    },
    {
        name: "Alice",
        skills: ["C++", "Networking"]
    },
    {
        name: "Dave",
        skills: ["Python", "AI"]
    }
];

// Create an array containing the uppercase version of every skill whose length is greater than 3.

const skills = developers
                    .flatMap(developer => developer.skills)
                    .filter(skill => skill.length > 3)
                    .map(skill => skill.toUpperCase());

console.log(skills);
                        