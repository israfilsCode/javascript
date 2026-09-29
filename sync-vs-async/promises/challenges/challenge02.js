const promise = new Promise((resolve, reject) => {
    reject("Database connection failed");
});

promise.catch((error) => {
    console.log(error);
});