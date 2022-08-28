//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { initQuestion, optionsArray, basicQ, advancedQ, professionalQ, customQ } = require('./utils/questions');

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
    inquirer.prompt(initQuestion)
        .then((choice) => {
            switch (choice.mainOption) {
                case optionsArray[0]:
                    inquirer.prompt(basicQ)
                        .then((answers) => {
                            writeToFile("newReadMe.md", generateMarkdown(answers));
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    break;
                case optionsArray[1]:
                    console.log("advanced")
                    break;
            }
        })
};

// Function call to initialize app
init();
