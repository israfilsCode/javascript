const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "PostgreSQL"
];

// console.log(skills[0]);
// console.log(skills[1]);
// console.log(skills[2]);
// console.log(skills[3]);

// destruturing

const [first, second, third, fourth] = skills;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);


// 🧠 Remember the difference

// Object destructuring → property names

// const { name, age } = developer;


// Array destructuring → position

// const [first, second] = skills;

// That's an important distinction.