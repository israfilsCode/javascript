const promise = new Promise((resolve, reject) => {
    const success = false;

    if (success) {
        resolve("Database connected");
    } else {
        reject("Database connection failed");
    }
});

promise
    .then(result => {
        console.log(result);
        return "Data loaded";
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Request finished");
    });


// PREDICTED OUTPUT:
// Database connection failed
// Request finished