const jsonData = '{"name":"Israfil","language":"JavaScript","experience":2}';

const developer = JSON.parse(jsonData);

console.log(developer.name); // Israfil
console.log(typeof developer); // object




// JavaScript object
//       ↓
// JSON.stringify()
//       ↓
// JSON string
//       ↓
// JSON.parse()
//       ↓
// JavaScript object