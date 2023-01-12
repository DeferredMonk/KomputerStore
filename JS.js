//Bank section

//Setting up the elements
const bankBalanceElement = document.getElementById("bankBalanceAmount");
const getLoanButtonElement = document.getElementById("getLoanButton");
const getCardTextElement = document.getElementById('bankTextContainer')
const getLoanTextElement = document.getElementById('loanContainer')

const loanTextElement = document.createElement('p')
const loanAmountElement = document.createElement('p')

let bankBalanceAmount = 20; //Bank balance 
let loanAmountTotal = 0;    //Total amount of current loan

bankBalanceElement.innerText = bankBalanceAmount

getLoanButtonElement.addEventListener("click", () => {
  //If get loan button pressed, asks for loan amount
  let loanAmount = Number(prompt("How much would you like to owe us?"));

  if (loanAmount <= bankBalanceAmount * 2) {
    //If loan request is under the double of 
    //the amount of money in the bank 
    //account the loan is approved

    bankBalanceAmount += loanAmount;
    loanAmountTotal += loanAmount

    loanTextElement.innerText = "Loan"
    loanAmountElement.innerText = loanAmountTotal + "€"
    getLoanTextElement.appendChild(loanTextElement)
    getLoanTextElement.appendChild(loanAmountElement)

  } else {
    alert("Loan denied!");
  }
  //Refresh the bank balance
  bankBalanceElement.innerText = bankBalanceAmount;
});

console.log("tyests")