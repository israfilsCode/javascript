const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("User data loaded");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});


//       promise created
//             |
//          pending
//             |
//        2 seconds pass
//             |
//    resolve("User data loaded")
//             |
//         fulfilled
//             |
//          .then()
//             |
//      User data loaded





// 🧠 One important refinement

// The setTimeout() doesn't make the Promise itself automatically asynchronous. The important sequence is:

// Promise created
//       ↓
// pending
//       ↓
// timer starts
//       ↓
// 2 seconds pass
//       ↓
// resolve("User data loaded")
//       ↓
// Promise becomes fulfilled
//       ↓
// .then() callback is queued as a microtask
//       ↓
// microtask executes
//       ↓
// User data loaded