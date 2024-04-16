import inquirer from 'inquirer';
let to_do = [];
let i = 50;
while (i = 50) {
    let userInput = await inquirer.prompt([
        {
            name: "todo",
            type: 'input',
            message: "What you want to add in To-Do List?",
        },
        {
            name: "sure",
            type: 'confirm',
            message: "Are you sure add new element in your list.",
            default: false,
        }
    ]);
    to_do.push(userInput.todo);
    console.log(to_do);
    i++;
}
