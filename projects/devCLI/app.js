import prompt from "./prompt.js";
import { addDeveloper, calculateAverageAge, deleteDeveloper, filterDevelopersByRole, findDeveloper, showAllDevelopers, showJavaScriptDevelopers } from "./utils/developersUtils.js";


let isExit = false;

const appOperations = new Map([
    [1, {name: "Show all developers", action: showAllDevelopers}],
    [2, {name: "Find a developer", action: findDeveloper}],
    [3, {name: "Filter by role", action: filterDevelopersByRole}],
    [4, {name: "Show JavaScript developers", action: showJavaScriptDevelopers}],
    [5, {name: "Calculate average age", action: calculateAverageAge}],
    [6, {name: "Add a developer", action: addDeveloper}],
    [7, {name: "Delete a developer", action: deleteDeveloper}],
    [8, {name: "Exit", action: exitApp}]
]);


do {
    app();
} while(!isExit);


function app() {
    console.log("=== Developer Manager ===", "\n");
    for (const [number, operations] of appOperations) {
        console.log(`${number}. ${operations.name}`);
    }
    console.log("\n");

    const answer = Number(prompt("Choose:_ "));

    const operation = appOperations.get(answer);
    
    if (operation) {
        operation.action();
    } else {
        console.log("Invalid Input");
    }
}

function exitApp() {
    isExit = true;
}