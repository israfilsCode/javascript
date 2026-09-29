console.log("START");

const promise = new Promise((resolve, reject) => {
    console.log("Inside Promise");
    resolve("DONE");
});

console.log("AFTER PROMISE");

promise.then((result) => {
    console.log(result);
});

console.log("END");

// PREDICTED OUTPUT:
// START
// AFTER PROMISE
// END
// Inside Promise
// DONE

// START
//   ↓
// Promise executor runs immediately
//   ↓
// Inside Promise
//   ↓
// resolve("DONE")
//   ↓
// Promise becomes fulfilled
//   ↓
// AFTER PROMISE
//   ↓
// .then(...) schedules its callback
//   ↓
// END
//   ↓
// current synchronous code finishes
//   ↓
// Promise callback runs
//   ↓
// DONE


// 🔥 Important new concept: Microtasks

// This is where Promises differ from setTimeout().

// Promise .then() callbacks are placed into the microtask queue.

// Timers such as setTimeout() use the task/macrotask queue.

// A simplified model is:

// Synchronous code
//       ↓
// Call Stack
//       ↓
// finish current code
//       ↓
// Microtask Queue
//       ↓
// Promise .then()
//       ↓
// Task Queue
//       ↓
// setTimeout()

// So Promise callbacks generally get processed before timer callbacks once the current synchronous work finishes.