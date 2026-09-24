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


const skills = developers.flatMap(developer => developer.skills)
                        .filter(skill => skill.length > 3);
                    

console.log(skills);