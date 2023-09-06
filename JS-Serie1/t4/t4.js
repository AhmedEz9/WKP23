function calculateGrade() {
  const score = parseInt(document.getElementById("score").value);

  if (isNaN(score) || score < 0 || score > 100) {
      document.getElementById("result").textContent = "Invalid score. Please enter a valid score between 0 and 100.";
  } else if (score >= 0 && score <= 39) {
      document.getElementById("result").textContent = "Your grade is 0.";
  } else if (score >= 40 && score <= 51) {
      document.getElementById("result").textContent = "Your grade is 1.";
  } else if (score >= 52 && score <= 63) {
      document.getElementById("result").textContent = "Your grade is 2.";
  } else if (score >= 64 && score <= 75) {
      document.getElementById("result").textContent = "Your grade is 3.";
  } else if (score >= 76 && score <= 87) {
      document.getElementById("result").textContent = "Your grade is 4.";
  } else {
      document.getElementById("result").textContent = "Your grade is 5.";
  }
}
