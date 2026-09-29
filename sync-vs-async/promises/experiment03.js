console.log("START");

setTimeout(() => {
    console.log("TIMEOUT");
}, 0);

Promise.resolve().then(() => {
    console.log("PROMISE");
});

console.log("END");

// PREDICTED OUTPUT:
// START
// END
// PROMISE
// TIMEOUT


// 🔥 Your mental model is now getting stronger
//                  JavaScript
//                      │
//                      ↓
//                 Call Stack
//                      │
//               synchronous code
//                      │
//                      ↓
//               stack becomes empty
//                      │
//           ┌──────────┴──────────┐
//           ↓                     ↓
//     Microtask Queue          Task Queue
//           │                     │
//       Promise.then()         setTimeout()
//           │                     │
//           └──────────┬──────────┘
//                      ↓
//                 Call Stack