//array of questions for user input
const questions = [

    {
        type: "input",
        message: "What is your repository name?",
        name: "projName"
    },
    {
        type: "input",
        message: "Please add a brief description of the project.",
        name: "projDesc"
    },
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
    {
        type: "confirm",
        message: "Do you want a section for screenshots/images/walkthrough video?",
        name: "projImages"
    },
    {
        type: "confirm",
        message: "Do you want to add any other sections?",
        name: "projAddSection"
    }
];

const optionsArray = [
    "Basic (Title, Description, Questions)",
    "Advanced (Basic plus Usage, Tests, Contributions)",
    "Professional(Advanced plus Installation, Issues)",
    "Custom (Add your own sections)"
];
// let basic = "Basic (Title, Description, Questions)";
// let advanced = "Advanced (Basic plus Usage, Tests, Contributions)";
// let professional = "Professional(Advanced plus Installation, Issues)";
// let custom = "Custom (Add your own sections)";
const initQuestion = [
    {
        type: "list",
        message: "What type of Readme do you want to build?",
        name: "mainOption",
        choices: [optionsArray[0], optionsArray[1], optionsArray[2], optionsArray[3]]
    },

];

module.exports = { questions, initQuestion, optionsArray }
