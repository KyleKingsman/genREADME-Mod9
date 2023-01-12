const inquirer = require('inquirer');
const questions = [];
const fs = require('fs');

const licenseBadgeLinks = {
    MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    Mozzilla: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
    Perl: `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`,
    Unlicense: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,
  };
  
  
  `# ${data.title}
  ${data.licenseBadge}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents (Optional)
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution Guidelines](#contributionsGuidelines)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.install}
  ## Usage
  
  ${data.usage}
  
  ## Contriubtion Guidelines
  
  ${data.contribution}
  
  
  ## »»————- ★　————-««
  
  
  
  ##Questions?
  
  ${data.github}
  For Queastions please contact me at [${data.email}](mailto:${data.email}).;



// function init() {}
// function writeToFile(fileName, data) {}
// // Function call to initialize app no
// init();
// do i need a license?? Should i make a license. will i be sued

const READMEOutput = (data) => '## ${data.title}
${data.description}

    inquirer
        .prompt([
            {
                type: 'input';
                message: 'What is your project's name?`;
                name: 'title',
            
            
        {
            type: 'input',
            message: `Please describe your project: 
            Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
            - What was your motivation?
            - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
            - What problem does it solve?
            - What did you learn?`,
            name: 'description',
        },
        {
            type: 'input',
            message: `Are there prerequazits for installing?`,
            name: 'install',
        },
        {
            type: 'input',
            message: `Describe the projects use`,
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Are there other collaberators?',
            name: 'contributions',
        },
        {
            type: 'list',
            message: 'Please chose a License',
            name: 'license',
            choices: [`MIT`, `Mozilla`, `Perl`, `Unliscense`],
        },
        {
            type: 'input',
            message: 'aPlease disclose tests',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Please enter your Github',
            name: 'github',
        },
        {
            type: 'input',
            message: `please enter your Email`,
            name: 'email',
        },
        

.then((data) => {
    console.log(data);
    data.licenseBadge = licenseBadgeLinks[data.license];
    const stuff = READMEOutput(data)
    fs.writeFile("README.md", stuff, (err) => {
        console.log(err) ; console.log(`README created!`)
    });
})

// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
// TODO: Create a function to write README file
// TODO: Create a function to initialize app