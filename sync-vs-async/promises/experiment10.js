Promise.resolve("Success")
    .then(result => {
        console.log(result);
    })
    .finally(() => {
        console.log("Finished");
    });

Promise.reject("Failed")
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Finished");
    });