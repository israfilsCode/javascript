const fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits[1] = "Grapes"; // this is allowed

console.log(fruits); // ["Apple", "Grapes", "Mango", "Orange"]

// fruits = ["Orange", "Mango"] // this is not allowed

// const fruits
//       │
//       ▼
// ┌─────────────────────────┐
// │ Apple │ Banana │ Mango  │
// └─────────────────────────┘

// You can't make fruits point to a completely different array:

// fruits ─────X────> new array

// But you can modify an element inside the existing array:

// fruits
//   │
//   ▼
// ┌─────────────────────────┐
// │ Apple │ Grapes │ Mango  │
// └─────────────────────────┘

// Note: We'll explore references and memory more deeply later when we connect JavaScript back to the computer-science concepts you're learning.