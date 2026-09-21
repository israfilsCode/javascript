const fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.shift(); // Apple will be removed

console.log(fruits); // [ 'Banana', 'Mango', 'Orange' ]


fruits.unshift("Apple"); // will adds an element to the begninning
console.log(fruits);


// Memorize this table
// Method	                What it does
// push()	                 Add to end
// pop()	               Remove from end
// unshift()	           Add to beginning
// shift()	               Remove from beginning