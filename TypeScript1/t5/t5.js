function lengthOrSquare(value) {
  if (typeof value === 'string') {
      return value.length;
  } else {
      return value * value;
  }
}

const userInput = prompt("Enter a string or a number:");
const parsedValue = isNaN(Number(userInput)) ? userInput : Number(userInput);

const result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
