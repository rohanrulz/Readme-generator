
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');


const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username? (Required)',
    validate: nameInput => {
      if (nameInput) {
          return true;
        } else {
          console.log("Please enter your Github username");
          return false;
        }
        
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name? (Required)",
    validate: nameInput => {
        if (nameInput) {
            return true;
          } else {
            console.log("Please enter the name of your project");
            return false;
          }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project'
  },
  
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies? (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true;
          } else {
            console.log("Please enter the command");
            return false;
          }
    },
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?'
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('README complete!');
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("./README.md", generateMarkdown(data));
    })
}
// Function call to initialize app
init();