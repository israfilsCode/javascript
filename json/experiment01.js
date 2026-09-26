const developer = {
    name: "Israfil",
    age: 20,
    role: "Full Stack Developer",
}

const jsonData = JSON.stringify(developer);

console.log(jsonData);
console.log(typeof jsonData); // string

const developerObj = JSON.parse(jsonData);

console.log(developerObj);
console.log(typeof developerObj); // object