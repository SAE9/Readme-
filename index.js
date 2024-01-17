const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require("os");


//1. come up with read.me default structure 
// 2. decide which questions you want to ask and the questions format 
// 3. Generate the read.me content based on user input 
// 4. Wite to read me file

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    
  
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project?',
    
  },
  {
    type: 'input',
    name: 'table of contents',
    message: 'What is included in your table of contents?',
    
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How to install your project?',
   
  },
  {
    type: 'input',
    name: 'usage',
    message:'How to use your app?',
    
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['Academic Free License', 'Apache-2.0', 'BSD-2-Clause', 'ISC', 'MIT', 'N/A'],
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Who contributed on this project',
   
  },
  {
    type: 'input',
    name: 'tests',
    message:'What are the tests instructions?',
   
  },
  {
    type: 'input',
    name: 'githubUsername',
    message:'What is your GitHub username?',  
  },
  {
    type: 'input',
    name: 'email',
    message:'What is your email?',
    
  },


];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  // writes the data given to specified path and joins to current working directory with given name filename.
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log('Generating README');
    try {
     writeToFile("./read/README.md", generateMarkdown({ ...answers })); 
     // Creates a readme file and puts it into the read folder and allows answers to be stored into that folder
    } catch (error) {
      console.error('Error when generating ReadMe file:', error.message);
    }
  });

} 


init();
