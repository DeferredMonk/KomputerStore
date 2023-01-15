//Global functions
const getElementById = (element) => document.getElementById(element); //Element helper func
const updateInnerText = (element, text) => (element.innerText = text); //Text add helper
const resetBalance = (balance, element) => {
  //Resets work balance
  balance = 0;
  updateInnerText(element, balance);
  return balance;
};
const addToBalance = (balance, amount, element) => {
  let result = (balance += amount);
  updateInnerText(element, result);
  return result;
};
const addElementToDom = (containerElement, newElement) => {
  containerElement.innerHTML += newElement;
};
const loanAmount = () =>
  //Check if user has an unpaid loan
  //if user has a loan return the amount of loan
  document.getElementById("loanAmount") &&
  +document.getElementById("loanAmount").innerText;

//Setting up the elements
const loanAmountElement = getElementById("loanAmount");
const bankBalanceElement = getElementById("bankBalanceAmount");
const getLoanButtonElement = getElementById("getLoanButton");
const getCardTextElement = getElementById("bankTextContainer");
const getLoanTextElement = getElementById("loanContainer");
const workButtonElement = getElementById("workButton");
const bankTransferButton = getElementById("bankTransferButton");
const workBalanceAmountElement = getElementById("workBalanceAmount");
const repayLoanButtonElement = getElementById("repayLoanButton");

export {
  bankBalanceElement,
  getLoanButtonElement,
  getCardTextElement,
  getLoanTextElement,
  getElementById,
  updateInnerText,
  workButtonElement,
  bankTransferButton,
  workBalanceAmountElement,
  addToBalance,
  addElementToDom,
  loanAmount,
  resetBalance,
  loanAmountElement,
  repayLoanButtonElement,
};
