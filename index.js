const inquirer = require('inquirer');
const {writeFile} = require('fs').promises;

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
            message: 'Which license type?',
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
    ])
};

// TODO: Create a function to write README file
const generateReadMe = ({title, description, installation, usage, license, contributing, test, github, email}) => 
`#${title}

## Description
${description}

## Table of Contents

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contributing
${contributing}

## Tests
${test}

## Questions
If you have any questions, feel free to reach out to me at ${github} or ${email}.
`;

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => writeFile('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
