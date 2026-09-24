function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    } 
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3

// A closure is a concept where a function remember it's variables in the scope where the function was declared
// even if its outer function execution has been finished
// there for the function remembering the variable would be declared once in the scope where the function was also declared
// and if the function call changed the variables value it will stay on this changed would not be redeclared and there is no way to redeclared it
// that's why counter() call changed the variable 0 to 1 and it just stayed and second time counter() call changed it 1 to 2 and so on.