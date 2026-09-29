console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");

// OUTPUT:
// A
// C
// E
// B
// D




// 🔥 One very important upgrade to your mental model

// You've been thinking:

// Call Stack → Timer → Callback → Event Loop

// That's good for learning, but here's a more accurate model:

//                 JavaScript code
//                       │
//                       ↓
//                  Call Stack
//                       │
//             ┌─────────┴─────────┐
//             │                   │
//       synchronous          async operation
//         execution          (timer, I/O, etc.)
//                                 │
//                                 ↓
//                            callback ready
//                                 │
//                                 ↓
//                          task/callback queue
//                                 │
//                                 ↓
//                            Event Loop
//                                 │
//                                 ↓
//                             Call Stack
//                                 │
//                                 ↓
//                            callback runs