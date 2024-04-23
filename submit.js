function calculateMoney(ticketSale) {
  const ticketCount = ticketSale;
  if (ticketCount >= 0) {
    const totalTicketPrice = ticketCount * 120;
    const guardDailySalary = 500;
    const staffLunchCost = 8 * 50;
    const TotalCost = staffLunchCost + guardDailySalary;
    const remainingMoney = totalTicketPrice - TotalCost;
    return remainingMoney;
  } else if (ticketCount < 0) {
    return "Sorry Baker Bhai you give a negative value or Invalid Number";
  } else {
    return "Sorry Baker Bhai wrong information";
  }
}

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

function password(obj) {
  const { name, birthYear, siteName } = obj;
  if (
    typeof name !== "string" ||
    typeof birthYear !== "number" ||
    birthYear.toString().length !== 4 ||
    typeof siteName !== "string"
  ) {
    return "invalid";
  } else if (!obj.name || !obj.birthYear || !obj.siteName) {
    return "invalid";
  }
  const passCheck = `${
    siteName.charAt(0).toUpperCase() + siteName.slice(1).toLowerCase()
  }#${name}@${birthYear}`;
  return passCheck;
}

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
