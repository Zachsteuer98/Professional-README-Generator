// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('../Professional-README-Generator/utils/page-template');
inquirer
  .prompt([
      {
          type: 'input',
          name: 'repoName',
          message: 'What is the name of your website/project?'
      }
  ])
  .then(answers => console.log(answers));




// const GenerateREADME = generatePage(name, github);

// fs.writeFile('./README.md', GenerateREADME, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
