import {
  bankBalanceElement,
  getLoanButtonElement,
  getCardTextElement,
  getLoanTextElement,
  getElementById,
  updateInnerText,
  workButtonElement,
  bankTransferButton,
  workBalanceAmountElement,
  loanAmount,
  addToBalance,
  resetBalance,
  loanAmountElement,
  repayLoanButtonElement,
} from "./utilsHelper.js";

import { addToBankBalance } from "./bankUtils.js";

//Variables
let workBalanceAmount = 0; //Initial work balance
let currentLoanAmount = 0;

//Functions
const getPaidForWork = (amount) => {
  workBalanceAmount += amount; //Adds a certain amount of € to work balance
  updateInnerText(workBalanceAmountElement, workBalanceAmount); //Update element with new balance
};

//Event listeners
bankTransferButton.addEventListener("click", () => {
  //Bank transfer button handler
  if (loanAmount() > 0) {
    let tenPercent = workBalanceAmount * 0.1;
    workBalanceAmount -= tenPercent;
    currentLoanAmount = loanAmount() - tenPercent;
    updateInnerText(getElementById("loanAmount"), currentLoanAmount);
  }
  if (loanAmount() <= 0 && document.getElementById("loanContainer") != null) {
    updateInnerText(getElementById("loanAmount"), 0);
    document.getElementById("loanContainer").remove();
  }

  addToBankBalance(workBalanceAmount);
  workBalanceAmount = resetBalance(workBalanceAmount, workBalanceAmountElement);
});

workButtonElement.addEventListener("click", () => {
  //Work button handler adds 100 to work balance
  getPaidForWork(100);
});
repayLoanButtonElement.addEventListener("click", () => {
  currentLoanAmount = loanAmount() - workBalanceAmount;
  let loanHelper =
    loanAmount() > workBalanceAmount
      ? loanAmount() - workBalanceAmount
      : workBalanceAmount - loanAmount();
  updateInnerText(getElementById("loanAmount"), currentLoanAmount);
  if (currentLoanAmount <= 0) {
    getElementById("repayLoanButton").style.visibility = "hidden";
    document.getElementById("loanContainer").remove();
  }
  workBalanceAmount = resetBalance(workBalanceAmount, workBalanceAmountElement);
  addToBankBalance(loanHelper);
  console.log(currentLoanAmount, loanHelper);
});

export { workBalanceAmount };
