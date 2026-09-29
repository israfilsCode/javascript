const promise = new Promise((resolve, reject) => {
    resolve("Success");
});


promise.then((result) => {
    console.log(result);
});

// 🧠 What's happening?

// When you call:

// resolve("Success");

// the Promise changes:

// pending
//    ↓
// fulfilled
//    ↓
// "Success"

// Then:

// promise.then((result) => {
//     console.log(result);
// });

// means:

// "When this Promise is fulfilled, run this callback and give me the resolved value."

// So:

// resolve("Success")
//         ↓
// Promise fulfilled
//         ↓
// .then(callback)
//         ↓
// result = "Success"
//         ↓
// console.log(result)

// Notice that resolve and reject are functions provided to the Promise executor by JavaScript.