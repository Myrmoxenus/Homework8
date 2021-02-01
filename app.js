const inquirer = require('inquirer')
const fs = require('fs')

//Generates inquirer input type prompts
function inquiryInput(readMeSectionName){
  this.type = 'input'
  this.name = readMeSectionName
  this.message = readMeSectionName + ":"
}
//Desired sections of the ReadMe
const readMeSections = ["Title", "Description", "Installation", "Usage", "Contributing", "Tests", "Questions"]

//Generates a new array from readMeSections of usable inquiryInputs
function generateReadMeSectionArray(){
  let readMeObjectInputArray = []
  for(i=0;i<readMeSections.length;i++){
    readMeObjectInputArray.push(new inquiryInput(readMeSections[i]))
  }
  return readMeObjectInputArray
}

inquirer
  .prompt([
...generateReadMeSectionArray(),
{
  type: 'list',
  name: 'License',
  message: 'Desired license for your project?',
  choices: ["Apache 2.0", "MIT", "GPL 3.0",]
},
  ])
  .then((answers) => {
    var badge = "test"
  if (answers.License == "Apache 2.0"){
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if (answers.License == "MIT"){
    badge = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  else if (answers.License == "GPL 3.0"){
    badge = "[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
    readMe = (`
${badge}
# ${answers.Title}

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Tests](#tests)
6. [Questions](#questions)

## Description:
${answers.Description}

## Installation: 
${answers.Installation}

## Usage:
${answers.Usage}

## License: 
${answers.License}

## Contributing: 
[${answers.Contributing}](https://github.com/${answers.Contributing})

## Tests: 
${answers.Tests}

## Questions: 
 Further questions can be directed to my e-mail at  ${answers.Questions}
`)


    fs.writeFile('README.md', readMe, function(err){
        if (err) throw err;
        console.log('Saved!');
    })

  });
