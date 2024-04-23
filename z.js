function monthlySavings(incomes, livingCost) {
  // ইনপুট ভুল হলে
  if (!Array.isArray(incomes) || typeof livingCost !== "number") {
    return "invalid input";
  }

  // সব পেমেন্টগুলি যোগ করা
  const totalIncome = incomes.reduce((sum, payment) => sum + payment, 0);

  // ইনকাম থেকে ট্যাক্স কে বাদ দেওয়া
  const afterTaxIncome = totalIncome * 0.8;

  // লিভিং কস্ট এবং ট্যাক্স বাদ দেওয়া
  const remainingIncome = afterTaxIncome - livingCost;

  // সেভিংস বের করা
  const savings = remainingIncome > 0 ? remainingIncome : 0;

  // ফাইনাল রি টার্ন করা
  if (savings > 0) {
    return savings;
  } else {
    return "earn more";
  }
}

// টেস্ট কেস
const incomes1 = [5000, 6000, 7000];
const livingCost1 = 3000;
console.log(monthlySavings(incomes1, livingCost1)); // Output: 14400

const incomes2 = [2000, 2500, 3000];
const livingCost2 = 7500;
console.log(monthlySavings(incomes2, livingCost2)); // Output: earn more

const invalidInput = "Invalid";
const livingCost3 = 2000;
console.log(monthlySavings(invalidInput, livingCost3)); // Output: invalid input
