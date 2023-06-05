// packages needed for this application
const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

//array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter a title for your project:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project:',
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
            name: 'contributing',
            message: 'Enter the contribution guidlelines for your project:',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter any test instructions for your project:',
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
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license:',
            choices: ['None', 'Apache 2.0 License', 'Boost Software License 1.0', 'GNU General Public License v3.0',
            'MIT License', 'Mozilla Public License 2.0']
        },
    ])
};

//function to initialize app
const init = () => {
    questions()
    .then((answers) => {
        const license = answers.license;
        return writeFile('./utils/README.md', generateMarkdown(answers, license));
    })
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
