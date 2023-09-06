const classifyButton = document.getElementById("classifyButton");

classifyButton.addEventListener("click", classifyTriangle);

function classifyTriangle() {
    const side1 = parseFloat(document.getElementById("side1").value);
    const side2 = parseFloat(document.getElementById("side2").value);
    const side3 = parseFloat(document.getElementById("side3").value);

    if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
        document.getElementById("result").textContent = "Eenter valid side lengths greater than zero.";
    } else if (side1 === side2 && side2 === side3) {
        document.getElementById("result").textContent = "Equilateral triangle.";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        document.getElementById("result").textContent = "Isosceles triangle.";
    } else {
        document.getElementById("result").textContent = "Scalene triangle.";
    }
}
