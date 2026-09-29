const promise = Promise.resolve(5);

promise
    .then(value => {
        return value * 2;
    })
    .then(value => {
        return value + 10;
    })
    .then(value => {
        console.log(value);
    });


// PREDICTED OUTPUT:

// 20