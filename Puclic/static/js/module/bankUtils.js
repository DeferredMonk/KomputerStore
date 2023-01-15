import {
  getElementById,
  addToBalance,
  addElementToDom,
  getCardTextElement,
  updateInnerText,
} from "./utilsHelper.js";

// Variables
let bankBalanceAmount = 0; //Bank balance

//Templates
let loanElement = (loanAmount) => `<div id="loanContainer" class="d-flex">
                <p>Loan</p>
                <p><span id="loanAmount">${loanAmount}</span>€</p>
                </div>`;

//Functions
const addToBankBalance = (amount) => {
  bankBalanceAmount = addToBalance(
    bankBalanceAmount,
    amount,
    getElementById("bankBalanceAmount")
  );
};

const addLoanToBalance = (loanAmount) => {
  let alreadyInDebt = document.getElementById("loanAmount");
  getElementById("repayLoanButton").style.visibility = "visible";
  if (!alreadyInDebt) {
    if (loanAmount <= bankBalanceAmount * 2 && loanAmount) {
      addToBankBalance(loanAmount);
      addElementToDom(getCardTextElement, loanElement(loanAmount));
    } else if (!loanAmount) {
      alert("bad input!");
    } else {
      alert(
        "Loan denied! You do not have the required amount of money to receive that kind of loan"
      );
    }
  } else {
    alert("Loan denied! You can only have one loan at the time");
  }
};

export { addLoanToBalance, bankBalanceAmount, loanElement, addToBankBalance };
