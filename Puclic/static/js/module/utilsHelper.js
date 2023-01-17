//Global functions
const getElementById = (element) => document.getElementById(element); //Element helper func
const updateInnerText = (element, text) => (element.innerText = text); //Text add helper

//Elements setup
const loanAmountElement = () => getElementById("loanAmount");
const bankBalanceElement = () => getElementById("bankBalanceAmount");
const getLoanButtonElement = getElementById("getLoanButton");
const getCardTextElement = getElementById("bankTextContainer");
const getLoanTextElement = () => getElementById("loanContainer");
const workButtonElement = getElementById("workButton");
const bankTransferButtonElement = getElementById("bankTransferButton");
const workBalanceAmountElement = () => getElementById("workBalanceAmount");
const repayLoanButtonElement = getElementById("repayLoanButton");

const elementVisible = (element, boolean) => {
  //Sets element to visible or invisible
  let visible = boolean ? "visible" : "invisible";
  element.style.visibility = visible;
};
const resetBalance = (balance, element) => {
  //Resets balance, updates info to dom and returns resetted value
  balance = 0;
  updateInnerText(element, balance);
  return balance;
};
const addToBalance = (balance, amount, element) => {
  //Adds to balance, updates info to dom and returns updated value
  let result = (balance += amount);
  updateInnerText(element, result);
  return result;
};
const addElementToDom = (containerElement, newElement) => {
  //Adds new element to dom from string
  containerElement.innerHTML += newElement;
};
const loanAmount = () =>
  //Check if user has an unpaid loan
  //if user has a loan return the amount of loan
  document.getElementById("loanAmount") &&
  +document.getElementById("loanAmount").innerText;

export {
  bankBalanceElement,
  getLoanButtonElement,
  getCardTextElement,
  getLoanTextElement,
  getElementById,
  updateInnerText,
  workButtonElement,
  bankTransferButtonElement,
  workBalanceAmountElement,
  addToBalance,
  addElementToDom,
  loanAmount,
  resetBalance,
  loanAmountElement,
  repayLoanButtonElement,
  elementVisible,
};
