const CLI = require("./lib/cli");
new CLI().run();

const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'svgName',
            message: `please type 3 letters that will appear on your SVG file`,
        },
        {
            type: 'input',
            name: 'nameColor',
            message: `Please write the hexadecimal number you want for your letters`,
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like to use?',
            choices: ['Circle','Triangle','Square' ]
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: `Please write the hexadecimal number you want for your shape`,
        },
    ])
    .then  ((data) => {
        switch (`${data.shape}`) {
            case 'Circle':
                const circle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <circle cx="150" cy="100" r="80" fill="${data.nameColor}" />
              
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.shapeColor}">${data.svgName}</text>
              
              </svg>`
              fs.writeFile('logo.svg', circle, (err) =>
              err ? console.error(err) : console.log('Success! Generated logo.svg')
          );
                break;
            case 'Triangle':
                const triangle = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <polygon points="150, 18 244, 182 56, 182" fill="${data.nameColor}" />
              
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${data.shapeColor}">${data.svgName}</text>
              
              </svg>`
              fs.writeFile('logo.svg', triangle, (err) =>
              err ? console.error(err) : console.log('Success! Generated logo.svg')
          );
            
                break;
            case 'Square':
                const square = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <rect x="90" y="40" width="120" height="120" fill="${data.nameColor}" />
              
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.shapeColor}">${data.svgName}</text>
              
              </svg>`
              fs.writeFile('./examples/logo.svg', square, (err) =>
              err ? console.error(err) : console.log('Success! Generated logo.svg')
          );
                break;
        }
    })
