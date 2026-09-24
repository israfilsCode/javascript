const developers = [
    { name: "Israfil", age: 20, language: "JavaScript" },
    { name: "Alice", age: 22, language: "C++"},
    { name: "Dave", age: 25, language: "Python"}
];

const hasJavaScriptDeveloper = developers.some(
    developer => developer.language === "JavaScript"
);

console.log(hasJavaScriptDeveloper);