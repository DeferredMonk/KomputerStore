// import fetchPosts from "./js/api/posts.js";
// import postsView from "./js/posts/postsView.js";
import {
  addLoanElementsToDom,
  addLoanToBalance,
  resetBankBalance,
  addToBankBalance,
  removeLoanElementFromDom,
  getBankBalance,
  loanElement,
} from "./js/module/bankUtils.js";

import {
  bankBalanceElement,
  getLoanButtonElement,
  getCardTextElement,
  getLoanTextElement,
} from "./js/module/utilsHelper.js";

// const InitialPosts = await fetchPosts();
// postsView.setPosts(InitialPosts);

const loanTextElement = document.createElement("p");
const loanAmountElement = document.createElement("p");

bankBalanceElement.innerText = getBankBalance(); //Initial value for bank balance

getLoanButtonElement.addEventListener("click", () => {
  //Userinput for loan amount
  let loanAmount = prompt("How much would you like to owe us?");

  //If cancel pressed nothing happens
  if (loanAmount === null) {
    return;
  }

  //Loan handler
  addLoanToBalance(+loanAmount);
});

//Work section

