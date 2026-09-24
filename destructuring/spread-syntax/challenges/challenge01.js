const skills1 = ["JavaScript", "React"];
const skills2 = ["Node.js", "PostgreSQL"];

const allSkills = [...skills1, ...skills2];

console.log(allSkills);


// (...) spread functionality:

// skills1 ──→ JavaScript, React ──┐
//                                 ├──→ allSkills
// skills2 ──→ Node.js, PostgreSQL ┘