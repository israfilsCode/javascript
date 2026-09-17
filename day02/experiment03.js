// Decission making in programming

const age = 18;

// if (age >= 18) {
//     console.log("You are an adult.");
// }

// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

    //          condition
    //             ↓
    //          ┌───────┐
    //          │  if   │
    //          └───┬───┘
    //              │
    //     ┌────────┴────────┐
    //   true              false
    //     ↓                  ↓
    //   if block          else block






// We can have multiple possibilities
// else if 

if (age < 15) {
    console.log("Child.");
} else if (age < 18) {
    console.log("Teenager.");
} else {
    console.log("Adult.");
}