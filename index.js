const inquirer =  require('inquirer');
const fs = require('fs');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const Circle = require('./lib/circle.js');

  inquirer
    .prompt([
        {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: input => input.length <= 3 || 'Please enter up to three characters'
        },
        {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or hexadecimal number for the text:',
        validate: input => !isNaN(parseInt(input)) ? 'Color must be a color keyword or hexadecimal value ie) blue or #0000FF' : true
        },
        {
        type: 'list',
        name: 'shape',
        message: 'Select a shape:',
        choices: ['circle', 'triangle', 'square']
        },
        {
        type: 'input',
        name: 'shapeColor',
        message: answers => `Enter a color keyword or hexadecimal number for the ${answers.shape}:`,
        validate: input => !isNaN(parseInt(input)) ? 'Color must be a color keyword or hexadecimal value ie) blue or #0000FF' : true
        }
    ])
    .then((answers)=>{
        switch (answers.desired_shape[0]){
          case 'Triangle':
            const renderedTriangle = new Triangle(answers.text.trim(), answers.textColor.trim(), answers.shapeColor.trim()).render();
            return renderedTriangle;
          case 'Square':
            const renderedSquare = new Square(answers.text.trim(), answers.textColor.trim(), answers.shapeColor.trim()).render();
            return renderedSquare;
          case 'Circle':
            const renderedCircle = new Circle(answers.text.trim(), answers.textColor.trim(), answers.shapeColor.trim()).render();
            return renderedCircle;
          default:
            throw new Error('Please choose a shape');
        };
      })
    .then((renderedLogo)=>{
        return new Promise((resolve, reject) => {
            fs.writeFile('./examples/renderedShape.svg', renderedLogo, (err) => {
                if (err) {
                reject(err);
                } else {
                console.log('Your SVG has been generated! Please check ./examples/');
                resolve();
                }
            });
        });
    })
    .catch((err)=>{
        console.log(err)
    });