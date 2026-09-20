
let username = "Israfil";

function outer() {
    function inner() {
        console.log(username);
    }

    inner();
}

outer();