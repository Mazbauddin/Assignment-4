function monthlySavings(allPayments, livingCost) {
  if (
    typeof allPayments !== "object" ||
    allPayments.length <= 0 ||
    typeof livingCost !== "number"
  ) {
    return "invalid input";
  } else {
    let incomeWithoutTax = 0;
    for (let i = 0; i < allPayments.length; i++) {
      let income = allPayments[i];
      if (income >= 3000) {
        incomeWithoutTax = incomeWithoutTax + (income - (income * 20) / 100);
      } else {
        incomeWithoutTax = incomeWithoutTax + income;
      }
    }

    const saving = incomeWithoutTax - livingCost;

    if (saving < 0) {
      return "earn more";
    } else {
      return saving;
    }
  }
}

const incomes1 = [1000, 2000, 2500];
const livingCost1 = 5000;
console.log(monthlySavings(incomes1, livingCost1)); // Output: 14400

const incomes2 = [2000, 2500, 3000];
const livingCost2 = 7500;
console.log(monthlySavings(incomes2, livingCost2)); // Output: earn more

const invalidInput = "Invalid";
const livingCost3 = 2000;
console.log(monthlySavings(invalidInput, livingCost3)); // Output: invalid input
