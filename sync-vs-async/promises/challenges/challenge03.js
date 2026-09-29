const promise = Promise.resolve(10);

promise
    .then((result) => result * 2)
    .then((result) => result + 5)
    .then((result) => console.log(result.toString()));