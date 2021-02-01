const inquirer = require('inquirer');
const fs = require('fs');
​
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      message: 'Where do you live?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Tell me about yourself?',
      name: 'bio',
    },
    {
        type: 'input',
        message: 'LinkedIn URL',
        name: 'LinkedIn',
        },
    {
        type: 'input',
        message: 'GitHub URL',
        name: 'GitHub',
        },
  ])
  .then((answers) => {
​
    console.log(answers)
    
    html = (`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Added a link to Bootstrap-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <title>Document</title>
    </head>
        <body>
            <h1 class="text-center">Name: ${answers.name}</h1>
            <p class="text-center">Location: ${answers.location}</p>
            <p class="text-center">Bio: ${answers.bio}</p>
            <p class="text-center">LinkedIn: ${answers.LinkedIn}</p>
            <p class="text-center">GitHub: ${answers.GitHub}</p>
        </body>
    </html>`)
​
    fs.writeFile('index.html', html, function(err){
        if (err) throw err;
        console.log('Saved!');
    })
​
