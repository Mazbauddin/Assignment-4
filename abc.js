function calculateMoney(a) {
  const ticketnumber = a;
  if (ticketnumber > 0) {
    const total__ticketPrice = ticketnumber * 120;
    const caretaker_fare = 500;
    const lunchFee = 50;
    const Nooflunchtaker = 8;
    const TotalLunchFee = lunchFee * Nooflunchtaker;
    const TotalCost = TotalLunchFee + caretaker_fare;
    const remainingMoney = total__ticketPrice - TotalCost;
    console.log(remainingMoney);
  } else if (ticketnumber < 0) {
    console.error("Sorry you give a negative valu or Invalid Number");
  } else {
    console.error("Sorry wrong information");
  }
}
calculateMoney(20);
