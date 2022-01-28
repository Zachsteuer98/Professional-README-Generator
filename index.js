// TODO: Include packages needed for this application
const fs = require('fs');
const generatePage = require('../Professional-README-Generator/utils/page-template');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const GenerateREADME = generatePage(name, github);

fs.writeFile('./README.md', GenerateREADME, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
