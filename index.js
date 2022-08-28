//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

//function to write README file
function writeToFile(fileName, data) {
   return fs.writeFile(fileName, data,
                (err) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log("Successful");
                });

};

//function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile("newReadMe.md", generateMarkdown(answers));
        })
        .catch(err => {
            console.log(err);
        })
};

// Function call to initialize app
init();
