function deleteInvalids(arr) {
  // ইনপুটটি একটি Array হতে হবে এবং অন্য ডেটা টাইপে হলে একটি ইরর ম্যাসেজ রিটার্ন করতে হবে
  if (!Array.isArray(arr)) {
    return "Invalid input. Please provide an array.";
  }

  // ভ্যালুগুলি ফিল্টার করতে হবে, যেগুলি নাম্বার হয়েছে
  const filteredArray = arr.filter(
    (value) => typeof value === "number" && !isNaN(value)
  );

  return filteredArray;
}

// ইনপুট এবং আউটপুট চেক করা
// const inputArray = [NaN, 1, 12, 0, -1, undefined];
const inputArray = 50;
const result = deleteInvalids(inputArray);

console.log(result); // [1, 12, 0, -1]
