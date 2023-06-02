const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your README file:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your README file:',
        },
        {
            type: 'input',
            name: 'table of contents',
            message: 'Enter the title of your README file:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter any installation instructions for your project:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter any usage information a user might need to know about your project:',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Enter the title of your README file:',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter the contribution guidlelines for your project:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter any test instructions for your project:',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter the title of your README file:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
