const ages = [25, 18, 30, 21, 19];

ages.sort();

console.log(ages);

// 18, 25, 21, 30, 19 
// 18, 21, 25, 30, 19
// 18, 21, 25, 19, 30
// 18, 21, 19, 25, 30
// 18, 19, 21, 25, 30

// may be sorting will work like above

const numbers = [2, 10, 5, 1, 20];

numbers.sort();

console.log(numbers); // 1, 10, 2, 20, 5


numbers.sort((a, b) => a - b);

// a - b < 0  → a comes before b
// a - b > 0  → b comes before a
// a - b === 0 → keep their relative order

console.log(numbers);