// Scope

let name = "Israfil";

function greet() {
    let message = "Hello";

    console.log(name);
    console.log(message);
}

greet();
console.log(name);
// console.log(message); // ReferenceError: message is not defined

// ┌──────────────────────────────┐
// │ Global room                  │
// │                              │
// │ name = "Israfil"             │
// │                              │
// │   ┌──────────────────────┐   │
// │   │ greet room           │   │
// │   │                      │   │
// │   │ message = "Hello"    │   │
// │   │                      │   │
// │   │ can see name    ✅   │   │
// │   └──────────────────────┘   │
// │                              │
// │ cannot see message      ❌   │
// └──────────────────────────────┘


// if (true) {
//     let age = 20; // the variable scope is in the block(inside the curly braces)

//     console.log(age);
// }

// console.log(age); // The age variable should not be available here in global scope


// if (true) {
//     const age = 20;

//     console.log(age);
// }

// console.log(age); 

// if (true) {
//     var age = 30;

//     console.log(age);
// }

// console.log(age);

// The observation is that let and const have thier block scope but var doesn't have block scope 