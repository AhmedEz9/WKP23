function squareRoot(num) {
  if (num === undefined || num === null) {
      return 'Input is undefined or null.';
  }
  if (isNaN(num)) {
      return 'Invalid input. Please enter a valid number.';
  }
  if (num < 0) {
      return 'Cannot calculate square root of a negative number.';
  }
  return Math.sqrt(num);
}

function calculateSquareRoot() {
  const userInput = document.getElementById('numberInput').value;
  const numberInput = userInput ? parseFloat(userInput) : undefined;

  const result = squareRoot(numberInput);
  document.getElementById('result').innerText = `Result: ${result}`;
}
