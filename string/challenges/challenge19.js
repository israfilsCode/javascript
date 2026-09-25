// 🎯 Final string challenge: build a username

// Let's combine several methods you've learned.

// Given:

// const email = "   Israfil@Example.COM   ";

// Create:

// israfil

// using a chain of string methods.

// Requirements:

// 1. Remove surrounding whitespace
// 2. Convert to lowercase
// 3. Extract everything before "@"

// Use:

// trim()
// → toLowerCase()
// → indexOf()
// → slice()

const email = "   Israfil@Example.COM   ";

const trimmedEmail = email.trim();
const uptoIndex = trimmedEmail.indexOf("@");

const username = trimmedEmail.slice(0, uptoIndex).toLowerCase();

console.log(username);


// 🧠 Your reasoning is solid

// You correctly applied the operations in the right order:

// "   Israfil@Example.COM   "
//           ↓
//        trim()
//           ↓
// "Israfil@Example.COM"
//           ↓
//      indexOf("@")
//           ↓
//           7
//           ↓
//      slice(0, 7)
//           ↓
//       "Israfil"
//           ↓
//     toLowerCase()
//           ↓
//       "israfil"