console.log("Start");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Data");
        resolve("Data loaded");
    }, 2000)
});

promise.then((result) => {
    console.log(result);
})


// console.log("END");

// What's happening:

// Promise created
//     ↓
// pending
//     ↓
// 2 seconds pass
//     ↓
// resolve("Data loaded")
//     ↓
// fulfilled
//     ↓
// .then(...)
//     ↓
// Data loaded