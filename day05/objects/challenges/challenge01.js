// 🎯 Challenge 1 — Build a developer object

// Create:

// day05/objects/challenge01.js

// Create an object containing:

// name
// age
// country
// role
// language

// Use your own values.

// Then:

// Print the name.
// Print the role.
// Change the role.
// Add a github property.
// Delete the age property.
// Print the final object.


const user = {
    name: "Israfil",
    age: 20,
    country: "Bangladesh",
    role: "Developer",
    language: "JavaScript",
}

console.log(user.name);
console.log(user.role);

user.role = "Software Engineer";
user.github = {
    username: "israfilscode",
    repositoryCount: 7, 
}

delete user.age;

console.log(user);

user.skills = {
    frontend: "React.js",
    backend: "Node.js",
    database: "PostgreSQL"
}

console.log(user.name);
console.log(user.language);
console.log(user.skills.backend);
console.log(user.skills.database);