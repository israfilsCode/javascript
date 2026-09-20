// Challenge 1

function checkAge(age) {
    if (age < 13) {
        return "Child";
    } else if (age < 18) {
        return "Teenager";
    } else {
        return "Adult";
    }
}

console.log(checkAge(10));
console.log(checkAge(15));
console.log(checkAge(20));
console.log(checkAge(35));


// Challenge 2

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));