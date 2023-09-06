var numbers = [];

for (var i = 1; i <= 5; i++) {
    var num = parseInt(prompt("Enter Number " + i + ":"));
    numbers.push(num);
}

console.log("Numbers:", numbers);

var searchNumber = parseInt(prompt("Enter a Number to Search:"));

if (numbers.includes(searchNumber)) {
    console.log("Number " + searchNumber + " is found in the array.");
} else {
    console.log("Number " + searchNumber + " is not found in the array.");
}

numbers.pop();

console.log("Updated Numbers:", numbers);

numbers.sort(function(a, b) {
    return a - b;
});

console.log("Sorted Numbers:", numbers);

document.write("<h2>Array Contents:</h2>");
document.write("<pre>Numbers: " + numbers.join(", ") + "</pre>");
document.write("<pre>Number " + searchNumber + (numbers.includes(searchNumber) ? " is found in the array." : " is not found in the array.") + "</pre>");
document.write("<pre>Updated Numbers: " + numbers.join(", ") + "</pre>");
document.write("<pre>Sorted Numbers: " + numbers.join(", ") + "</pre>");
