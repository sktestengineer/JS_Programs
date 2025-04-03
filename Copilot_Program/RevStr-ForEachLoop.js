// Reverse string using a forEach loop
function reverseStringWithForEach(str) {
    let reversed = '';
    str.split('').forEach(char => {
        reversed = char + reversed;
    });
    return reversed;
}

// Example usage
const reversedWithForEach = reverseStringWithForEach(originalString);
console.log("Reversed String with forEach:", reversedWithForEach);