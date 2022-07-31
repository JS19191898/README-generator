const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of what your application does."
    },
    {
        type: "input",
        name: "installation",
        message: "What is the process to install your application?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the use-case of your application?"
    },
    {
        type: "input",
        name: "contribution",
        message: "Did any other contributors help build your application? List please."
    },
    {
        type: "input",
        name: "test",
        message: "Write out the process to test your application."
    },
    {
        type: "list",
        name: "license",
        message: "What license is your application licensed under?",
        choices: ["ISC", "MIT", "GPL", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((response)=> {
        console.log("the response from user", response)

        writeToFile("README.md", generateMarkdown(response) )
    })
    .catch((error)=> console.log(error))
}

// Function call to initialize app
init();
