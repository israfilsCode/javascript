console.log("START");

setTimeout(() => {
    console.log("MIDDLE");
}, 2000);

console.log("END");

// OUTPUT:

// START
// END
// MIDDLE
// after 2 seconds after print END print MIDDLE


// 🧠 But here's a very important correction

// Don't think of 2000 as:
// "JavaScript will wait 2 seconds, then execute it."

// Think of it as:
// "Don't run this callback before 2 seconds have passed."



// 🔑 Important rule

// setTimeout(fn, 0) does NOT mean "run immediately."

// It means roughly:

// "Run this callback after the current synchronous work is finished and the callback is eligible to be processed."



// The callback cannot interrupt the synchronous code. JavaScript must finish the current work first.

// So the real idea is:

// setTimeout()
//      ↓
// timer starts
//      ↓
// 2 seconds pass
//      ↓
// callback becomes eligible
//      ↓
// wait for JavaScript to be free
//      ↓
// callback executes

// This is where the Call Stack + Event Loop becomes important.



//                  JavaScript
//                      │
//                      ↓
//                 Call Stack
//                      │
//        ┌─────────────┴─────────────┐
//        ↓                           ↓
// console.log("START")          setTimeout()
//        ↓                           │
//     START                          │
//                                    ↓
//                               Timer system
//                               waits 2 sec
//                                    │
//                                    ↓
//                               callback ready
//                                    │
//                                    ↓
//                              Event Loop
//                                    │
//                                    ↓
//                               Call Stack
//                                    │
//                                    ↓
//                               console.log()
//                                    ↓
//                                 MIDDLE

