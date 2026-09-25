const text = "JavaScript";

console.log(text.substring(0, 4)); // Java

// At first glance, it looks exactly like slice().

// But there are important differences, especially with negative indexes.



// 🧠 substring() vs slice()

// For positive indexes, they often look the same:

// text.slice(4);       // "Script"
// text.substring(4);   // "Script"

// But there is an important difference with negative values.

// slice() understands negative indexes:

// const text = "JavaScript";

// console.log(text.slice(-6));

// →

// Script

// substring() treats negative values as 0:

// console.log(text.substring(-6));

// which behaves like:

// console.log(text.substring(0));

// →

// JavaScript

// So a useful rule is:

// slice()      → supports negative indexes
// substring()  → negative indexes become 0


// Another difference

// With slice():

// text.slice(7, 4)

// returns:

// ""

// With substring():

// text.substring(7, 4)

// JavaScript swaps the arguments and behaves like:

// text.substring(4, 7)

// →

// "Scr"