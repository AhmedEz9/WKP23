// TODO: Implement the lengthOrSquare function
// Define the type(s) for 'value'
function lengthOrSquare(value: string | number): number {
    // TODO: Use a type guard to check the actual type of 'value'
    if (typeof value === 'string') {
        // If type is string, return the length of the string
        return value.length;
    } else {
        // If type is number, return the square of the number
        return value * value;
    }
}

// Prompt the user to enter a value as either a string or a number
const userInput = prompt("Enter a string or a number:");
const parsedValue = isNaN(Number(userInput)) ? userInput : Number(userInput);

// Call the lengthOrSquare function
const result = lengthOrSquare(parsedValue);
console.log(typeof result);
console.log(result);
