function calculateDistance() {
  const point1Input = document.getElementById("point1").value;
  const point2Input = document.getElementById("point2").value;

  const [x1, y1] = point1Input.split(',').map(parseFloat);
  const [x2, y2] = point2Input.split(',').map(parseFloat);

  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
      document.getElementById("result").textContent = "Invalid input. Please enter valid coordinates.";
      return;
  }

  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  document.getElementById("result").textContent = `The distance between (${x1}, ${y1}) and (${x2}, ${y2}) is ${distance.toFixed(2)}`;
}
