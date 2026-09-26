// Map

// Now we're ready for the other important JavaScript collection:

// Map

// A Set stores:

// value
// value
// value

// A Map stores:

// key → value
// key → value
// key → value

// Example:

const developer = new Map([
    ["name", "Israfil"],
    ["age", 20],
    ["role", "Full Stack Developer"]
]);

// You can retrieve a value using its key:

console.log(developer.get("name"));

// Output:

// Israfil

developer.set("language", "javaScript");

console.log(developer);



// 🧠 Object vs Map

// You've already worked extensively with objects:

// const developer = {
//     name: "Israfil",
//     age: 20
// };

// A Map is another structure for storing key-value data, with its own methods:

// map.set()
// map.get()
// map.has()
// map.delete()
// map.size