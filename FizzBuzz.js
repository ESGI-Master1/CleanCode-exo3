const readline = require('readline');

const FIZZ_DIVISOR = 3;
const BUZZ_DIVISOR = 5;

/**
 * Converts a number to FizzBuzz representation
 */
function fizzBuzz(number = 100) {
  let result = '';
  if (number % FIZZ_DIVISOR === 0) result += 'Fizz';
  if (number % BUZZ_DIVISOR === 0) result += 'Buzz';
  return result || number.toString();
}

/**
 * Creates and returns a readline interface
 */
function createReadlineInterface() {
  return readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
  });
}

/**
 * Processes user input and converts it to a number
 */
function processUserInput(userInput) {
  return Number(userInput);
}

/**
 * Displays the FizzBuzz result
 */
function displayResult(result) {
  console.log(result);
}

/**
 * Handles the complete user interaction flow
 */
function handleUserInteraction() {
  const readlineInterface = createReadlineInterface();
  
  readlineInterface.question('Entrez un nombre: ', (userInput) => {
    const inputNumber = processUserInput(userInput);
    const fizzBuzzResult = fizzBuzz(inputNumber);
    displayResult(fizzBuzzResult);
    readlineInterface.close();
  });
}

/**
 * Displays welcome message for the FizzBuzz game
 */
function displayWelcomeMessage() {
  console.log('FizzBuzz Game');
}

/**
 * Main function - entry point of the application
 */
function main() {
  displayWelcomeMessage();
  handleUserInteraction();
}

// Application entry point
main();