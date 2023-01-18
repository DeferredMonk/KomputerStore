import {
  addToBalance,
  addElementToDom,
  getCardTextElement,
  repayLoanButtonElement,
  elementVisible,
  bankBalanceElement,
  getLoanButtonElement,
} from "./utilsHelper.js";

// Variables
let bankBalanceAmount = 0; //Bank balance

//Templates
const loanElement = (loanAmount) =>
  //Template for loan balance
  `<div id="loanContainer" class="d-flex">
                <p>Loan</p>
                <p><span id="loanAmount">${loanAmount}</span>€</p>
                </div>`;

//Functions
const addToBankBalance = (amount) => {
  //Adds to bank balance parameter amount
  bankBalanceAmount = addToBalance(
    bankBalanceAmount,
    amount,
    bankBalanceElement()
  );
};

const requestLoan = () => {
  //Loan request handler
  const loanAmountElement = document.getElementById("loanAmount"); //Gets loan amount element
  const loanLimit = bankBalanceAmount * 2; //Users loan limit

  let loanAmount = prompt("How much would you like to owe us?"); //User input for loan amount

  if (loanAmount === null) {
    //Cancel handler
    return;
  }

  loanAmount = +loanAmount; //Sets requested loan amount to type number

  if (!loanAmountElement) {
    //If a loan is not active
    if (loanAmount <= loanLimit && loanAmount) {
      //Loan handler
      addToBankBalance(loanAmount); //Updates loan amount to bank balance
      addElementToDom(getCardTextElement, loanElement(loanAmount)); //Adds loan counter to doms
      elementVisible(repayLoanButtonElement, true); //Makes loan button visible
    } else if (!loanAmount) {
      //Error handler if user input is character or none
      alert("bad input!");
    } else {
      //Error handler if amount too high
      alert(
        "Loan denied! You do not have the required amount of money to receive that kind of loan"
      );
    }
  } else {
    //Error handler if loan already active
    alert("Loan denied! You can only have one loan at the time");
  }
};

//Loan button handler
getLoanButtonElement.addEventListener("click", () => {
  //Loan handler
  requestLoan();
});

export { requestLoan, bankBalanceAmount, loanElement, addToBankBalance };
