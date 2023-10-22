// Function to reverse an array
function reverseArray(array) {
  return array.reverse();
}

// Test the function with arrays of different types
const numberArray = [1, 2, 3, 4, 5];
const stringArray = ["apple", "banana", "cherry", "date"];
const mixedArray = [true, 42, "hello", false];

// Reverse the arrays
const reversedNumberArray = reverseArray(numberArray);
const reversedStringArray = reverseArray(stringArray);
const reversedMixedArray = reverseArray(mixedArray);

// Print the reversed arrays
console.log("Reversed Array of Numbers:", reversedNumberArray);
console.log("Reversed Array of Strings:", reversedStringArray);
console.log("Reversed Mixed Array:", reversedMixedArray);
