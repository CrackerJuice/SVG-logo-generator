const inquirer = require('inquirer');
const fs = require('fs');
const { circle, triangle, square } = require('./lib/shapes');

const questions = [
  {
    type: 'list',//changes checkbox type to list type 
    name: 'shape',
    message: 'What shape do you want your logo to be?',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'bgColor',
    message: 'What color do you want the background of your logo to be?',
  },
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters to be put on the logo:',
    validate: (input) => input.length <= 3 || 'Text should be 3 characters or less.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color do you want the text on your logo to be?',
  },
];

function generateSVG(shape, bgColor, text, textColor) {
  let shapePath = '';

  switch (shape) {
    case 'circle':
      shapePath = circle();
      break;
    case 'triangle':
      shapePath = triangle();
      break;
    case 'square':
      shapePath = square();
      break;
    default:
      break;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
      <rect width="100%" height="100%" fill="white" />
      <path d="${shapePath}" fill="${bgColor}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${textColor}" font-size="48" dy=".3em">
        ${text}
      </text>
    </svg>
  `;
}

async function writeToFile(fileName, data) {
  try {
    await fs.promises.writeFile(fileName, data);
    console.log('Logo successfully generated!');
  } catch (error) {
    console.error('Could not generate logo:', error);
  }
}

async function main() {
  console.log('Starting logo generator...');

  const answers = await inquirer.prompt(questions);
  const svg = generateSVG(answers.shape, answers.bgColor, answers.text, answers.textColor);

  await writeToFile('logo.svg', svg);
}

main();
