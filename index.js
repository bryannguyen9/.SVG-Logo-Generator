const fs = require('fs');
const path = require('path');
const svgCaptcha = require('svg-captcha');
const inquirer = require('inquirer');

const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: input => input.length <= 3 || 'Please enter up to three characters'
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text:'
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
      message: answers => `Enter a color keyword or hexadecimal number for the ${answers.shape}:`
    }
  ];