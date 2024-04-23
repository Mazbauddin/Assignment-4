// function checkName(name) {
//   if (typeof name !== "string") {
//     return "Invalid";
//   } else if (
//     name[name.length - 1] == "a" ||
//     "y" ||
//     "i" ||
//     "e" ||
//     "o" ||
//     "u" ||
//     "w" ||
//     "A" ||
//     "Y" ||
//     "I" ||
//     "E" ||
//     "O" ||
//     "U" ||
//     "W"
//   ) {
//     return "Bad Name";
//   } else {
//     return "Good Name";
//   }
// }

function checkName(name) {
  const c = name[name.length - 1];
  if (typeof name !== "string") {
    return "Invalid";
  } else if (
    c === "a" ||
    c === "y" ||
    c === "i" ||
    c === "e" ||
    c === "o" ||
    c === "u" ||
    c === "w" ||
    c === "A" ||
    c === "Y" ||
    c === "I" ||
    c === "E" ||
    c === "O" ||
    c === "U" ||
    c === "W"
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

console.log(checkName("shawone"));
// const inputName = "jafore";

// // checkName() ফাংশন কল করা
// const result = checkName(inputName);

// // আউটপুট দেখানো
// console.log(result);
