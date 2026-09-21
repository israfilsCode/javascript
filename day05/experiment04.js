const fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");

console.log(fruits);

fruits.pop();

console.log(fruits);

const result = fruits.push("Orange"); 

console.log(result); // 4
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]