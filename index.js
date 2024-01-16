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
    validate: (value) => { if (value) {
      return true
    }else {
      return "Please add a value"
    }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project?',
    validate: (value) => { if (value) {
      return true
    }else {
      return "Please add a value"
    }
    }
  },
  {
    type: 'input',
    name: 'table of contents',
    message: 'What is included?',
    validate: (value) => { if (value) {
      return true
    }else {
      return "Please add a value"
    }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How to install your project?',
    validate: (value) => { if (value) {
      return true
    }else {
      return "Please add a value"
    }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message:'How to use your app?',
    validate: (value) => { if (value) {
      return true
    }else {
      return "Please add a value"
    }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['Academic Free License', 'Apache-2.0', 'BSD-2-Clause', 'ISC', 'MIT', 'N/A'],
  },
  {
    type: 'input',
    name: 'tests',
    message:'What are the tests instructions?',
    validate: (value) => { if (value) {
      return true
    }else {
      return "Please add a value"
    }
    }
  },
  {
    type: 'input',
    name: 'gitHub',
    message:'What is your GitHub username?',
    validate: (value) => { if (value) {
      return true
    }else {
      return "Please add a value"
    }
    }
    
  },
  {
    type: 'input',
    name: 'email',
    message:'What is your email?',
    validate: (value) => { if (value) {
      return true
    }else {
      return "Please add a value"
    }
    }
    
  },


];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// Create a command-line application that accepts user input.
// * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
//   * The title of my project 
//   * Sections entitled:
//     * Description 
//     * Table of Contents 
//     * Installation 
//     * Usage 
//     * License 
//     * Contributing 
//     * Tests 
//     * Questions
//   * When a user enters the project title then it is displayed as the title of the README
//   * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//   * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
//   * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
//   * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
//   * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log('Generating README');
     writeToFile("./read/README.md", generateMarkdown({ ...answers }));
  });
} 


// const promptUser = async () => {
//   try {
//    return await inquirer.prompt([
    
    
// // Using async/await and try/catch
// const init = async () => {
//     console.log('Generating README');
//     try {
//       const answers = await promptUser();
//       const readmeContent = generateMarkdown(answers);
//       writeToFile('README.md', readmeContent);
  
//       console.log('Successfully wrote to README,md');
//     } catch (err) {
//       console.log(err);
//     }
//   };
// function call to initialize program

init();
