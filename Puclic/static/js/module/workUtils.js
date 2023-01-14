let workBalanceAmount = 0;
workBalanceAmountElement.innerText = workBalanceAmount;

bankTransferButton.addEventListener("click", () => {
  removeLoanElementFromDom();
  if (loanAmountTotal > 0) {
    let tenPercent = workBalanceAmount * 0.1;
    workBalanceAmount -= tenPercent;
    loanAmountTotal -= tenPercent;
  }
  bankBalanceAmount += workBalanceAmount;

  updateInnerText(bankBalanceElement, bankBalanceAmount);
  updateInnerText(loanAmountElement, loanAmountTotal + "€");

  workBalanceAmount = 0;

  updateInnerText(workBalanceAmountElement, workBalanceAmount);
});

workButtonElement.addEventListener("click", () => {
  //Work button handler adds 100 to work balance
  workBalanceAmount += 100;

  //update the info to html
  updateInnerText(workBalanceAmountElement, workBalanceAmount);
});
