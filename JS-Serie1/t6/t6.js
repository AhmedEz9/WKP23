function generateTable() {
  const numInput = document.getElementById("numInput").value;

  const num = parseInt(numInput);

  if (isNaN(num) || num <= 0) {
      alert("Enter a valid positive integer.");
      return;
  }

  let tableHTML = "<h2>Multiplication Table:</h2><table>";

  for (let i = 1; i <= num; i++) {
      tableHTML += "<tr>";
      for (let j = 1; j <= num; j++) {
          tableHTML += `<td>${i * j}</td>`;
      }
      tableHTML += "</tr>";
  }

  tableHTML += "</table>";

  document.getElementById("tableContainer").innerHTML = tableHTML;
}
