//Global functions

const getElementById = (element) => document.getElementById(element); //Element helper func
const updateInnerText = (element, text) => (element.innerText = text); //Text add helper

//Setting up the elements
const bankBalanceElement = getElementById("bankBalanceAmount");
const getLoanButtonElement = getElementById("getLoanButton");
const getCardTextElement = getElementById("bankTextContainer");
const getLoanTextElement = getElementById("loanContainer");
const workButtonElement = document.getElementById("workButton");
const bankTransferButton = document.getElementById("bankTransferButton");
const workBalanceAmountElement = document.getElementById("workBalanceAmount");

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
};
