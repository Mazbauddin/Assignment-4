function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }

  // বৈশিষ্ট্যমূলক অক্ষরের সেট
  const forbiddenChars = [
    "A",
    "a",
    "Y",
    "y",
    "I",
    "i",
    "E",
    "e",
    "O",
    "o",
    "U",
    "u",
    "W",
    "w",
  ];

  // নামের অক্ষর চেক
  for (let char of name) {
    if (forbiddenChars.includes(char)) {
      return "Bad Name";
    }
  }

  return "Good Name";
}

// ইনপুট নেওয়া
const inputName = "Aye";

// checkName() ফাংশন কল করা
const result = checkName(inputName);

// আউটপুট দেখানো
console.log(result);
