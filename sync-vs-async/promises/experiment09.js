const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("User data loaded");
    }, 2000);
});

promise
    .then(data => {
        return data + " successfully";
    })
    .then(result => {
        console.log(result);
    });


//           promise created
//                 |
//              pending
//                 |
//            2 seconds pass
//                 |
//           call stack empty
//                 |
//         timer call back run
//                 |
//      resolve("User data loaded")
//                 |
//             fulfilled
//                 |
//first promise.then callback is microtask queue
//                 |
//  event loop checks is call stack empty
//                 |
// runs and returns "Users data loaded" +  " successfully";
//                 |
//       promise.then callback
//                 |
//   Users data loaded successfully