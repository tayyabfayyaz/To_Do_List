#! /usr/bin/env node
import inquirer from 'inquirer';
let to_do = [];
let condition = true;
let removeCondition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "first",
            type: 'input',
            message: "What you want to add in To-Do List?",
        },
        {
            name: "second",
            type: 'confirm',
            message: "Are you sure add new To-Do in your list.",
            default: true,
        },
    ]);
    to_do.push(todoQuestions.first);
    console.log(to_do);
    condition = todoQuestions.second;
}
while (removeCondition) {
    let removeConditionTrue = await inquirer.prompt({
        name: "falseCondition",
        type: 'confirm',
        message: "Do you want to remove TO-Do List last element? ",
        default: false,
    });
    removeCondition = removeConditionTrue.falseCondition;
    to_do.pop();
    console.log(to_do);
}
