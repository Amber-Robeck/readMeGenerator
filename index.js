// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// const questions = [];
inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "imput",
        message: "What is your preferred email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project name?",
        name: "projName"
    },
    {
        type: "input",
        message: "Brief description of project:",
        name: "projDesc"
    },
    {
        type: "input",
        message: "How will users install?",
        name: "projIns",
    },
    {
        type: "input",
        message: "How do users use this?",
        name: "projUsage"
    },
    {
        type: "input",
        message: "How can people contribute?",
        name: "projContrib"
    },
    {
        type: "input",
        message: "Are there any tests?",
        name: "projTest"
    },
    {
        type: "list",
        message: "Would you like a license?",
        name: "projLic",
        choices: ["Skip", "ISC", "MIT", "Apache-2.0", "Gpl-3.0"]
    },

])
    .then((answers) => {
        console.log(answers);
        var markupStr = writeToFile(answers);
        console.log(markupStr);
        fs.writeFile('newReadMe.md', markupStr,
            (err) => {
                if (err) {
                    console.log(err);
                }
                console.log("Successful");
            })
    })
    .catch(err => {
        console.log(err);
    })

// // TODO: Create a function to write README file
function writeToFile(data) {
    // console.log(data);
    return generateMarkdown(data);

}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
