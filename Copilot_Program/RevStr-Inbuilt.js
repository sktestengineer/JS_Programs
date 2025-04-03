// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
const originalString = "My Name Is Santosh Kumar";
const reversedString = reverseString(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);

