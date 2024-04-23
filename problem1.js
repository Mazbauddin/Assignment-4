// function calculateMoney(ticketSale) {
//   let ticketPrice = ticketSale;
//   let ticketnumber
//   if (typeof ticketSale !== "number" || ticketSale < 0) {
//     return "Please type a valid number";
//   } else {
//     let ticketPrice = 120;
//     let guardDailySalary = 500;
//     let staffLunchCost = 8 * 50;
//     let totalCost = guardDailySalary + staffLunchCost;
//     let remainingCost = ticketPrice - totalCost;
//     return remainingCost;
//   }
// }
// console.log(calculateMoney(5));

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

console.log(calculateMoney(10));
