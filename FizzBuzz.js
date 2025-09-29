function fizzBuzz(number = 100) {
  let out = '';
  if (number % 3 === 0) out += 'Fizz';
  if (number % 5 === 0) out += 'Buzz';
  return out.toString() || number.toString();
}


console.log(fizzBuzz());
