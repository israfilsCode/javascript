const technology = "PostgreSQL";

console.log(technology.length); // 10


// One subtle but important point: .length is a property, not a method.
technology.length      // ✅
technology.length()    // ❌