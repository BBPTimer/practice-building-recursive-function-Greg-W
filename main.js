function reverseString(inputString) {
    if (inputString.length === 1 || inputString.length === 0) {
        return inputString;
    }
    return inputString.slice(-1) + reverseString(inputString.slice(0, -1));
}

console.log(reverseString("hello")); // Outputs: "olleh"
console.log(reverseString("recursion")); // Outputs: "noisrucer"
console.log(reverseString("a")); // Outputs: "a"
console.log(reverseString("")); // Outputs: ""