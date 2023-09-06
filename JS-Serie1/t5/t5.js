function calculateSum() {
  const number = parseInt(document.getElementById("number").value);

  if (isNaN(number) || number <= 0) {
      document.getElementById("result").textContent = "Enter a positive integer.";
      return;
  }

  let sum = 0;

  for (let i = 1; i <= number; i++) {
      sum += i;
  }

  document.getElementById("result").textContent = `The sum of natural numbers up to ${number} is ${sum}.`;
}
