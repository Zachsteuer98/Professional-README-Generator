module.exports = (name, github) => {
    return  `
    # ${repoName}
    
    ## Table of Contents

    1. [Project Description]
    2. [Installation Instructions]
    3. [Made with]
    4. [Usage Information]
    5. [Features] 
    6. [Contributors]
    7. [License]
    

    ## Project Description
    ${answers.description}

    ## Installation Instructions
    ${answers.installation}

    ## Made With
    ${answers.languages}

    ## Usage Information
    ${answers.usage}

    ## Features
    ${answers.features}

    ## Contributors
    ${answers.contributors}

    ## license
  `;
}