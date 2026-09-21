const fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// Index:     0         1         2         3
//           ↓         ↓         ↓         ↓
//        ┌───────┬────────┬────────┬────────┐
//        │ Apple │ Banana │ Mango  │ Orange │
//        └───────┴────────┴────────┴────────┘

// The index represents the offset from the beginning:

// first element  → offset 0
// second element → offset 1
// third element  → offset 2
// fourth element → offset 3