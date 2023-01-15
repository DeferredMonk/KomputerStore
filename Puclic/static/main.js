import { addLoanToBalance, bankBalanceAmount } from "./js/module/bankUtils.js";

import {
  bankBalanceElement,
  getLoanButtonElement,
  updateInnerText,
  workBalanceAmountElement,
} from "./js/module/utilsHelper.js";

import { workBalanceAmount } from "./js/module/workUtils.js";

//Sets initial value for bank balance
updateInnerText(bankBalanceElement, bankBalanceAmount);
//Sets initial value for work balance
updateInnerText(workBalanceAmountElement, workBalanceAmount);

//Loan button handler
getLoanButtonElement.addEventListener("click", () => {
  //User input for loan amount
  let loanAmount = prompt("How much would you like to owe us?");

  //If cancel pressed nothing happens
  if (loanAmount === null) {
    return;
  }

  //Loan handler
  addLoanToBalance(+loanAmount);
});
