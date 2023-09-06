var numbers = [];

while (true) {
    var input = prompt("Enter a number (or 'done' to finish):");

    if (input === 'done') {
        break;
    }

    var number = parseInt(input);

    if (!isNaN(number)) {
        numbers.push(number);
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
}

var evenNumbers = [];

for (var num of numbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}

document.write("<h2>Even Numbers:</h2>");

if (evenNumbers.length > 0) {
    document.write("<p>" + evenNumbers.join(', ') + "</p>");
} else {
    document.write("<p>None</p>");
}

console.log("Program ended.");
