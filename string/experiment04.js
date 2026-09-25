// trim()

// trim() removes whitespace from the beginning and end of a string.
// This is especially useful with user input.

const username = "       Israfil      ";

console.log(username.trim());
// console.log(username);

// trim() does not remove spaces inside the string:
const name = "      Israfil Mallick          ";

console.log(name.trim()); // Israfil Mallick
