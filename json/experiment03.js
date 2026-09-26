// ⚠️ Important JSON limitation

// Not every JavaScript value can be represented in JSON.

// For example:

const data = {
    name: "Israfil",
    age: 20,
    active: true,
    nothing: null,
    missing: undefined,
    sayHello: function () {
        console.log("Hello");
    }
};

const jsonData = JSON.stringify(data);

console.log(jsonData);



// JSON supports these basic types:

// string
// number
// boolean
// null
// object
// array


// But things like:

// undefined
// function
// Symbol

// don't have normal JSON representations.