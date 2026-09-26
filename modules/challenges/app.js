// import multiply, {add as sum, subtract} from "./math.js";

// console.log(sum(10, 5));
// console.log(subtract(10, 5));
// console.log(multiply(6, 7));

import {add, subtract, multiply} from "./index.js";

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));


// module flow:
// math.js
//    │
//    ├── add ──────────────┐
//    ├── subtract ─────────┤
//    └── multiply(default) ┤
//                          ↓
//                       index.js
//                          │
//                          ↓
//                        app.js