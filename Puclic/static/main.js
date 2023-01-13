// import fetchPosts from "./js/api/posts.js";
// import postsView from "./js/posts/postsView.js";
import {
  addLoanElementsToDom,
  addLoanToBalance,
  resetBankBalance,
  addToBankBalance,
  removeLoanElementFromDom,
  getBankBalance,
  loanTemplate,
} from "./js/module/bankUtils.js";

// const InitialPosts = await fetchPosts();
// postsView.setPosts(InitialPosts);

// console.log(InitialPosts);

//Global functions

const getElementById = (element) => document.getElementById(element); //Element helper func
const updateInnerText = (element, text) => (element.innerText = text); //Text add helper

//Bank section

//Setting up the elements
const bankBalanceElement = getElementById("bankBalanceAmount");
const getLoanButtonElement = getElementById("getLoanButton");
const getCardTextElement = getElementById("bankTextContainer");
const getLoanTextElement = getElementById("loanContainer");

const loanTextElement = document.createElement("p");
const loanAmountElement = document.createElement("p");

bankBalanceElement.innerText = getBankBalance(); //Initial value for bank balance

getLoanButtonElement.addEventListener("click", () => {
  //If get loan button pressed, asks for loan amount
  let loanAmount = Number(prompt("How much would you like to owe us?"));
  let loansTaken = 0;

  if (loanAmount <= bankBalanceAmount * 2 && loansTaken === 0) {
    //If loan request is under the double of
    //the amount of money in the bank
    //account the loan is approved
    //Loan amount has to be zero to gain a loan,
    //this covers the one loan at a time requirement

    bankBalanceAmount += loanAmount; //Bank balance
    loanAmountTotal += loanAmount; //Loan taken

    //Adds text to loan balance elements
    loanTextElement.innerText = "Loan";
    loanAmountElement.innerText = loanAmountTotal + "€";

    //Adds the elements to the card
    getLoanTextElement.appendChild(loanTextElement);
    getLoanTextElement.appendChild(loanAmountElement);
  } else {
    //If the loan request does not meet the requirements the loan will be denied
    alert("Loan denied!");
  }
  //Refresh the bank balance
  bankBalanceElement.innerText = bankBalanceAmount;
});

//Work section

const workButtonElement = document.getElementById("workButton");
const bankTransferButton = document.getElementById("bankTransferButton");
const workBalanceAmountElement = document.getElementById("workBalanceAmount");

let workBalanceAmount = 0;
workBalanceAmountElement.innerText = workBalanceAmount;

bankTransferButton.addEventListener("click", () => {
  if (loanAmountTotal > 0) {
    let tenPercent = workBalanceAmount * 0.1;
    workBalanceAmount -= tenPercent;
    loanAmountTotal -= tenPercent;
  }
  bankBalanceAmount += workBalanceAmount;

  updateInnerText(bankBalanceElement, bankBalanceAmount);
  updateInnerText(loanAmountElement, loanAmountTotal + "€");

  workBalanceAmount = 0;

  updateInnerText(workBalanceAmountElement, workBalanceAmount);
});

workButtonElement.addEventListener("click", () => {
  //Work button handler adds 100 to work balance
  workBalanceAmount += 100;

  //update the info to html
  updateInnerText(workBalanceAmountElement, workBalanceAmount);
});

addLoanElementsToDom(loanTemplate);
removeLoanElementFromDom();
