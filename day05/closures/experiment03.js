function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    }
}

const counterA = createCounter();
const counterB = createCounter();

// creates a different environment:

// counterA                 counterB
//    │                        │
//    └── count = 0            └── count = 0

counterA(); // 1
counterA(); // 2
counterB(); // 1
counterA(); // 3
counterB(); // 2