console.log("START");

setTimeout(() => {
    console.log("TIMEOUT");
}, 0);

for (let i = 0; i < 1_000_000_000; i++) {
    // intentionally busy
}

console.log("END");

// OUTPUT:

// START
// ....
// END
// TIMEOUT