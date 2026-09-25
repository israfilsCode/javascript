// slice(start, end) returns a portion of the string.

const language = "JavaScript";

console.log(language.slice(0, 4)); // Java

// end index would not include
// Why?

// JavaScript
// 0123456789
// ^^^^

// slice(0, 4) means:

// Start at index 0, stop before index 4.

// So indexes 0, 1, 2, 3 are returned.

const word = "JavaScript";

console.log(word.slice(4, 10)); // Script