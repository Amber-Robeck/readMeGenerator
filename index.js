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

function assembleQuestions(array1, array2, array3) {
    let array;
    if (array1 && array2 && array3) {
        console.log("Third times the charm")
        array = array1.concat(array2, array3)
    }
    else if (array1 && array2) {
        array = array1.concat(array2)
    }
    else {
        array = array1
    }
    return inquirer.prompt(array)
        .then((answers) => {
            writeToFile("newReadMe.md", generateMarkdown(answers));
        })
        .catch(err => {
            console.log(err);
        });
};

function choiceSwitch(choice) {
    switch (choice.mainOption) {
        case optionsArray[0]:
            assembleQuestions(basicQ);
            break;
        case optionsArray[1]:
            console.log("advanced")
            assembleQuestions(basicQ, advancedQ);
            break;
        case optionsArray[2]:
            console.log("professional")
            assembleQuestions(basicQ, advancedQ, professionalQ);
            break;
        default:
            console.log("Something went wrong");
    }
};

//function to initialize app
function init() {
    inquirer.prompt(initQuestion)
        .then((choice) => {
            choiceSwitch(choice);
        })
};

// Function call to initialize app
init();
