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

// -----------------Call Stack--------------------------------------------------
// -----------------first()------------------------------------------------------
// -----------------console.log("FIRST")------------------------------------------
// ---------------first is finished executing and popped from call stack----------
// -----------------second()-----------------------------------------------------
// ---------------console.log("SECOND")-----------------------------------------
// -------------second is finished executing and popped from call stack----------
// ----------------setTimeout()--------------------------------------------> timing system-------->callback ready in 2s---
//                                                                                                                       |
// -----------------console.log("END")------------------------------------                                               |
//                                                                                                                       |
// ------------------callback()-----------------------------------------------------<------empty call stack-------<------|
// ------------------console.log("CALLBACK")-------------------------------