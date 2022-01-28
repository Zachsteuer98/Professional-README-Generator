// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('../Professional-README-Generator/utils/page-template');
const promptUser = () => {
 return inquirer.prompt([
      {
          type: 'input',
          name: 'repoName',
          message: 'What is the name of your website/project?'
      },
      {
          type: 'input',
          name: 'description',
          message: 'What is a brief description explaining the what, why, and how of your project.'
      },
      {
          type: 'input',
          name: 'installation',
          message: 'What are the steps required to install your project? Are there none?'
      },
      {
          type: 'checkbox',
          name: 'languages',
          message: 'What programming languages/libraries were used to create the application?',
          choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'JQuery', 'Bootstrap', 'Node', 'Bulma']
      },
      {
          type: 'input',
          name: 'usage',
          message: 'Provide instructions and examples for use.' 
      },
      {
          type: 'input',
          name: 'features',
          message: 'What features does your application have?'
      },
      {
          type: 'input',
          name: 'contributors',
          message: 'Who are the contributors for this application?'
      }
  ])
};
  promptUser().then(answers => console.log(answers));




// const GenerateREADME = generatePage(name, github);

// fs.writeFile('./README.md', GenerateREADME, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
