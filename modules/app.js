import multiply, { add as sum, subtract } from "./math.js";


// 🧠 The important lesson

// When using ES modules with Node.js, the local file path should include the file extension:

// import { add } from "./math.js";  // ✅

// rather than:

// import { add } from "./math";     // ❌ in this setup



console.log(sum(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));