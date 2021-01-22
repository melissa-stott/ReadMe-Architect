// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of the repository?',
        name: 'repository',
    },
    {
        type: 'input',
        message: 'What is the title for your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Will you please describe your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What technologies were used in the development of this project?',
        name: 'technologies',
    },
]
function handleAnswers(answers) {
    console.log(`Repository: ${answers.repository}. Title: ${answers.title}. Description: ${answers.description}. Technologies: ${answers.technologies}.`)
}
inquirer.prompt(questions).then(handleAnswers);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
