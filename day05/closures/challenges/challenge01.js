function createGreeter(name) {
    function greet() {
        console.log("Hello, " + name);
    }
    
    return greet;
}

const greetIsrafil = createGreeter("Israfil");
const greetAlice = createGreeter("Alice");

greetIsrafil();
greetAlice();