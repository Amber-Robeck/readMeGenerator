//array of questions for user input
module.exports = questions = [

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

];
