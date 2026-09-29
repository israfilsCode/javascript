console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

Promise.resolve().then(() => {
    console.log("C");
});

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");

// PREDICTED OUTPUT:

// A
// E
// B
// C
// D


// Execution Order

// ┌──────────────────────┐
// │   Synchronous code   │
// └──────────┬───────────┘
//            ↓
// ┌──────────────────────┐
// │   Microtask queue    │
// │   Promise callbacks  │
// └──────────┬───────────┘
//            ↓
// ┌──────────────────────┐
// │      Task queue      │
// │   timers, etc.       │
// └──────────────────────┘