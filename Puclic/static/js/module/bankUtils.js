import { getElementById } from "./utilsHelper.js";

// Variables
let bankBalanceAmount = 0; //Bank balance

//Templates
let loanElement = (loanAmount) => `<div id="loanContainer" class="d-flex">
                <p>Loan</p>
                <p><span id="loanAmount">${loanAmount}</span>€</p>
                </div>`;

//Functions
const addToBankBalance = (amount) => (bankBalanceAmount += amount);
const getBankBalance = () => bankBalanceAmount;
const resetBankBalance = () => (bankBalanceAmount = 0);
const addLoanToBalance = (loanAmount) => {
  let alreadyInDebt = document.getElementById("loanAmount");

  if (!alreadyInDebt) {
    if (loanAmount <= getBankBalance() * 2 && loanAmount) {
      updateBankBalance(loanAmount);
      addLoanElementsToDom(loanElement(loanAmount));
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

const updateBankBalance = (newValue) => {
  const bankBalance = addToBankBalance(newValue);
  getElementById("bankBalanceAmount").innerText = bankBalance; //Update balance to dom
};

const addLoanElementsToDom = (template) => {
  const cardTextElement = getElementById("bankTextContainer");
  cardTextElement.innerHTML += template;
};
const removeLoanElementFromDom = () =>
  document.getElementById("loanContainer").remove();

export {
  addLoanElementsToDom,
  addLoanToBalance,
  resetBankBalance,
  addToBankBalance,
  removeLoanElementFromDom,
  getBankBalance,
  loanElement,
};
