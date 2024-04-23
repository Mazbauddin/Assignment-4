function capitalizeFirstLetter(inputString) {
  // Check if the input is a valid string
  if (typeof inputString !== "string") {
    return "Invalid input";
  }

  // Convert the first letter to uppercase and the rest to lowercase
  const resultString =
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();

  return resultString;
}

// Test cases
console.log(capitalizeFirstLetter("google")); // Output: Google
console.log(capitalizeFirstLetter("GooGLE")); // Output: Google
console.log(capitalizeFirstLetter("JavaScript")); // Output: Javascript
console.log(capitalizeFirstLetter(123)); // Output: Invalid input
