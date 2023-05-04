const inquirer = require('inquirer');
const fs = require('fs');


inquirer 
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: `What is your project's name?`,
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description for your readMe',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please write the installation instructions.',
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Please write usage information.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please write the usage for this program',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please list any members working on this project',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Was there any tests for this program? If so, please list them. If not. Just write, `No Tests Done`',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license would you like to use?',
            choices: ['MIT License', 'Apache License 2.0','ISC License' ]
        },
        {
            type: 'input',
            name: 'gitHubName',
            message: 'What is your username on GitHub?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?',
        },
    ])
    .then((data) => {
        const readMe = `${data.title}
Description.
${data.description}



Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#tests)
- [Questions](#questions)







## INSTALLATION
${data.installation}




## USAGE
${data.usageInfo}
${data.usage}





## LICENSE
The license used in this program is ${data.license}






## CONTRIBUTION
${data.contributions}






## TESTS
${data.tests}





## QUESTIONS
If you have any questions please reach out to me on github at ${data.gitHubName} or email me at ${data.email}!





Git Repo https://github.com/GerryRaldO/ReadMeGen
https://drive.google.com/file/d/1G12xzsCoCY2iOFXcJNxkY08Z6xSdKgNw/view`;
        fs.writeFile('README.md', readMe, (err) =>
            err ? console.error(err) : console.log('Success! Your page is generated!')
        );
    })