import {
  updateInnerText,
  workButtonElement,
  bankTransferButtonElement,
  workBalanceAmountElement,
  loanAmount,
  resetBalance,
  repayLoanButtonElement,
  loanAmountElement,
  getLoanTextElement,
  elementVisible,
} from "./utilsHelper.js";

import { addToBankBalance } from "./bankUtils.js";

//Variables
let workBalanceAmount = 0; //Initial work balance
let loanHelper = 0; //Helper to calculate loan

//Functions
const getPaidForWork = (amount) => {
  //Adds a certain amount of € to work balance
  workBalanceAmount += amount;
  updateInnerText(workBalanceAmountElement(), workBalanceAmount); //Update element with new balance
};
const resetWorkBalance = (balance, balanceContainer) => {
  //Sets work balance to 0
  workBalanceAmount = resetBalance(balance, balanceContainer);
};
const bankTransferHandler = (
  balance,
  loan,
  loanElement,
  loanElementContainer,
  balanceContainer
) => {
  //bank transaction handler
  if (balance <= 0) {
    //Error handler
    alert("Your balance is 0€. Go to work!");
    return;
  }
  if (loan > 0) {
    //If the user is in debt deduction from transfer will happen
    let tenPercent = balance * 0.1;
    balance -= tenPercent;
    updateInnerText(loanElement, loan - tenPercent);
  }
  if (loan <= 0 && loanElementContainer != null) {
    //If user has paid his loan loan element will be removed from the dom
    updateInnerText(loanElement, 0);
    loanElementContainer.remove();
  }
  addToBankBalance(balance);
  resetWorkBalance(balance, balanceContainer);
};
const repayButtonHandler = (loanElement, loan, balance) => {
  //Repay loan button handler

  if (balance <= 0) {
    //Error handler
    alert("Your balance is 0€. Go to work!");
    return;
  }

  updateInnerText(loanElement, loan); //Update loan amount to dom

  if (loan <= 0) {
    //If loan is paid of remove elements from dom or make invisible
    elementVisible(repayLoanButtonElement, false);
    getLoanTextElement().remove();
  }
  if (loan <= 0 && balance > 0) addToBankBalance(Math.abs(loan)); //If there is money left transfer to balance

  resetWorkBalance(balance, workBalanceAmountElement()); //Reset work balance
};

//Event listeners
bankTransferButtonElement.addEventListener("click", () => {
  //Bank transfer button handler

  loanHelper = loanAmount(); //Sets current loan amount

  //Event handler function
  bankTransferHandler(
    workBalanceAmount,
    loanHelper,
    loanAmountElement(),
    getLoanTextElement(),
    workBalanceAmountElement()
  );
});

workButtonElement().addEventListener("click", () => {
  //Work button handler
  getPaidForWork(100); //Event handler funtion
});

repayLoanButtonElement.addEventListener("click", () => {
  //Repay loan button handler

  loanHelper = loanAmount() - workBalanceAmount; //Remaining loan

  repayButtonHandler(loanAmountElement(), loanHelper, workBalanceAmount); //Button handler
});

export { workBalanceAmount };
