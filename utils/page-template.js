module.exports = (name, github) => {
    return  `
    # ${name}
    
    ## Table of Contents

    1. [Project Description]
    2. [Installation Instructions]
    3. [Made with]
    4. [Usage Information]
    5. [Features] 
    6. [Contributors]
    7. [License]
    

    ## Project Description
    
    ## Installation Instructions
    
    ## Made With

    ## Usage Information
    
    ## Features

    ## Contributors
    ${github}

    ## license
  `;
}