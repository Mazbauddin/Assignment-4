// function deleteInvalid(input) {
//     if(typeof(input) !== "object") {
//         return "Invalid Input"
//     }
//     else {
//         const result = input.filter(x => typeof(x) === "number" );
//         return result;
//     }
// }

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

// Test cases
console.log(deleteInvalids([NaN, 1, 12, 0, -1, undefined])); // Output: [ 1, 18, -19 ]
console.log(deleteInvalids(["1", { num: 2 }, NaN])); // Output: []
console.log(deleteInvalids([1, 2, -3])); // Output: [ 1, 2, -3 ]
console.log(deleteInvalids({ num: [1, 2, 3] })); // Output: "Invalid Array"
