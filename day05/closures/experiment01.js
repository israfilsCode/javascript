// 🧠 JavaScript — Closures

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const greet = outer();
greet();



// 🔑 What is a closure?

// A closure happens when a function remembers and can access variables from the scope where that function was created, even after that outer function has finished executing.

// Think:

// outer()
//    │
//    ├── message = "Hello"
//    │
//    └── inner()
//           │
//           └── remembers message