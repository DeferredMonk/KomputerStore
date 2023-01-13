// Variables
let bankBalanceAmount = 0; //Bank balance
let loanAmountTotal = 0; //Total amount of current loan

//Templates
let loanTemplate = `<div id="loanContainer" class="d-flex">
                <p>Loan</p>
                <p>${loanAmountTotal}€</p>
                </div>`;

//Functions
const addToBankBalance = (amount) => (bankBalanceAmount += amount);
const getBankBalance = () => bankBalanceAmount;
const resetBankBalance = () => (bankBalanceAmount = 0);
const addLoanToBalance = () => (bankBalanceAmount += loanAmountTotal);
const addLoanElementsToDom = (template) => {
  const cardTextElement = document.getElementById("bankTextContainer");
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
  loanTemplate,
};
