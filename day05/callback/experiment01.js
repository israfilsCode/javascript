function processDeveloper(developer, callback) {
    callback(developer);
}

function showDeveloper(developer) {
    console.log(developer.name);
    console.log(developer.role);
}


processDeveloper({name: "Israfil", age: 20, role: "Full Stack Developer"}, showDeveloper);


// Execution Steps

// processDeveloper(object, showDeveloper)
//              ↓
//      developer = object
//      callback = showDeveloper
//              ↓
//      callback(developer)
//              ↓
//      showDeveloper(developer)
//              ↓
//      console.log(developer.name)
//      console.log(developer.role)


// 🚀 Next: Higher-order functions

// A higher-order function is a function that either:

// takes another function as an argument, or
// returns a function.