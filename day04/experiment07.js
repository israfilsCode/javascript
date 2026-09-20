let name = "Israfil";

function outer() {
    let name = "Outer";

    function inner() {
        let name = "Inner";

        console.log(name);
    }

    inner();
    console.log(name);
}

// outer();
// console.log(name);

// output: 
// Inner
// Outer
// Israfil

// here is what happening in my views:
// we have declared a variable called name this is a global variable with assigned value "Israfil" after that 
// declared a function called outer then call the function now we are inside that function
// inside that we again declared a variable called name so this variable shawoding the global variable inside the whole block of outer function with the assigned value "Outer"
// then we another function inside the outer function named inner 
// and we called inner funtion after declared it so on we are inside the inner function now 
// inside the inner function we have declared another variable called name now it's shadowing the outer functions name variable through out it's scope with the value assigned "Inner"
// then the function inner prints the value of name variable "Inner" and end function scope 
// now we are outside of inner function after invokation end we are in outer function scope printing name variable value of outer scope "Outer"
// then the the outer function scope and we are out side of outer function after invokation now printing global scope name variables value "Israfil". 

