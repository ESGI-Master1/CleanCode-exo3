const readline = require('readline');

function fizzBuzz(number = 100) {
  let out = '';
  if (number % 3 === 0) out += 'Fizz';
  if (number % 5 === 0) out += 'Buzz';
  return out.toString() || number.toString();
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Entrez un nombre: ', (answer) => {
  const num = Number(answer);
  console.log(fizzBuzz(num));
  rl.close();
})