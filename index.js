//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { questions, initQuestion } = require('./utils/questions');

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
                case "Basic (Title, Description, Questions)":
                    inquirer.prompt(questions)
                        .then((answers) => {
                            console.log(answers.projAddSections)
                            writeToFile("newReadMe.md", generateMarkdown(answers));
                        })
                        .catch(err => {
                            console.log(err);
                        });
                    break;
                case "Advanced (Basic plus Usage, Tests, Contributions)":
                    console.log("advanced")
                    break;
            }
        })
};

// Function call to initialize app
init();
