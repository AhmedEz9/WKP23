function generateTable() {
  // Get the user's input
  const numInput = document.getElementById("numInput").value;

  // Convert the input to a number
  const num = parseInt(numInput);

  // Check if the input is a positive integer
  if (isNaN(num) || num <= 0) {
      alert("Please enter a valid positive integer.");
      return;
  }

  // Generate the multiplication table
  let tableHTML = "<h2>Multiplication Table:</h2><table>";

  for (let i = 1; i <= num; i++) {
      tableHTML += "<tr>";
      for (let j = 1; j <= num; j++) {
          tableHTML += `<td>${i * j}</td>`;
      }
      tableHTML += "</tr>";
  }

  tableHTML += "</table>";

  // Display the table in the tableContainer div
  document.getElementById("tableContainer").innerHTML = tableHTML;
}
