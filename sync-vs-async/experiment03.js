function first() {
    console.log("FIRST");
}

function second() {
    console.log("SECOND");
}

first();
second();

setTimeout(() => {
    console.log("CALLBACK");
}, 2000)

console.log("END");

// OUTPUT: 

// FIRST
// SECOND
// END


// The complete mental model
// first()
//    ↓
// push onto Call Stack
//    ↓
// execute
//    ↓
// pop from Call Stack

// second()
//    ↓
// push
//    ↓
// execute
//    ↓
// pop

// console.log("END")
//    ↓
// execute

// So synchronous JavaScript is essentially:

// One task enters the Call Stack → executes → leaves → next task enters.