Promise.resolve("Database connected")
    .then((result) => {
        console.log(result);
    })
    .finally(() => {
        console.log("Request finished");
    });