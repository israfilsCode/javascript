const names = ["Alice", "Bob", "Israfil", "Charlie"];

let searchResult = "";

for (const name of names) {
    if (name === "Israfil") {
        searchResult = name;
    }
}

if (searchResult === "Israfil") {
    console.log("Found Israfil");
} else {
    console.log("Name not found");
}