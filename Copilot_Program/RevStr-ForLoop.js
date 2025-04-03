// Reverse string using a for loop
function reverseStringWithLoop(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example usage
const reversedWithLoop = reverseStringWithLoop(originalString);
console.log("Reversed String with Loop:", reversedWithLoop);

