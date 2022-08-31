//array of questions for basic readme
const basicQ = [
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
        type: "list",
        message: "Would you like a license?",
        name: "projLic",
        choices: ["Skip", "ISC", "MIT", "Apache-2.0", "Gpl-3.0"]
    },
];

const advancedQ = [
    {
        type: "input",
        message: "How do users use this project?",
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
];

const professionalQ = [
    {
        type: "checkbox",
        message: "How do users install? (Press SPACE to choose)",
        name: "projIns",
        choices: [
            "Skip this step for now",
            "Clone the repository",
            "`npm i` to install required dependencies",
            "`npm start` to start the development server",
            "`node server.js` to start the server",
            "`node index.js` to start the application",
            "No need to install this project is currently deployed. (Check deployed link)"
        ]
    },
    {
        type: "input",
        message: "How will others report issues?",
        name: "projIss",
    },

];

const customQ = [
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

const initQuestion = [
    {
        type: "list",
        message: "What type of Readme do you want to build?",
        name: "mainOption",
        choices: [optionsArray[0], optionsArray[1], optionsArray[2], optionsArray[3]]
    },

];

module.exports = { initQuestion, optionsArray, basicQ, advancedQ, professionalQ, customQ };
