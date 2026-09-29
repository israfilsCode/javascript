import prompt from "../prompt.js";
import {developers, saveDevelopers} from "../data/developers.js"

export const addDeveloper = () => {
    const devProperties = new Set(["name", "age", "role", "language"]);
    const developer = new Map();

    for (const prop of devProperties) {
        const value = prompt(`${prop}: `);
        if (prop === "age") {
            developer.set(prop, Number(value));
        } else {
            developer.set(prop, value);
        }
    }

    const developerObj = Object.fromEntries(developer);
    const { name, ...others } = developerObj;

    developers.set(developerObj.name, others);

    saveDevelopers();
}


export const deleteDeveloper = () => {
    const questions = new Set(["name"]);

    let deleted;
    let name = "";
    for (const question of questions) {
        const answer = prompt(`${question}: `);

        if (question === "name") {
            deleted = developers.delete(answer);
            name = answer;
        }
    }

    if (deleted) {
        saveDevelopers();
        console.log(`Developer ${name} is Deleted`);
    } else {
        console.log("Developer Not Found");
    }
}

export const showAllDevelopers = () => {
    for (const [name, { role, language }] of developers) {
        console.log(`${name} — ${role} — ${language}`);
    }
}

export const findDeveloper = () => {
    const questions = new Set(["name"]);

    let devFound;
    let name;
    for (const question of questions) {
        const answer = prompt(`${question}: `);

        if (question === "name") {
            devFound = developers.get(answer);
            name = answer;
        }
    }

    if (devFound) {
        console.log(`${name} - ${devFound.role} - ${devFound.language}`);
    } else {
        console.log("Developer Not Found");
    }
}

export const showJavaScriptDevelopers = () => {
    const javaScriptDevs = [...developers.entries()].filter(([, {language}]) => language.toLowerCase() === "javascript");

    for (const [name] of javaScriptDevs) {
        console.log(`-> ${name}`);
    }
}


export const filterDevelopersByRole = () => {
    const inputRole = prompt("role: ");

    const filteredDevs = [...developers.entries()].filter(([, {role}]) => role.toLowerCase() === inputRole.toLowerCase());

    for (const [name, {role}] of filteredDevs) {
        console.log(`${name} - ${role}`);
    }
}


export const calculateAverageAge = () => {
    if (developers.size === 0) {
        console.log("No developers available.");
        return;
    }

    const totalAge = [...developers.entries()].reduce((total, [, {age}]) => {
        return total + age;
    }, 0);

    const averageAge = totalAge / developers.size;

    console.log(`Average age: ${averageAge}`);
}