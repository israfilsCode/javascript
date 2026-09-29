import fs from "node:fs";

const DATA_FILE = new URL('./developers.json', import.meta.url);


let developers;
if (fs.existsSync(DATA_FILE)) {
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    const developersObject = JSON.parse(data);

    developers = new Map(Object.entries(developersObject));
} else {
    developers = new Map();
}

function saveDevelopers() {
    const developersObject = Object.fromEntries(developers);

    fs.writeFileSync(
        DATA_FILE,
        JSON.stringify(developersObject, null, 2)
    );
}

export { developers, saveDevelopers };