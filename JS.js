//Bank section
const bankBalanceElement = document.getElementById("bankBalanceAmount");
const getLoanButtonElement = document.getElementById("getLoanButton");
let bankBalanceAmount = 20;

getLoanButtonElement.addEventListener("click", () => {
  let loanAmount = prompt("How much would you like to owe us?");

  if (loanAmount <= bankBalanceAmount * 2) {
    bankBalanceAmount += Number(loanAmount);
  } else {
    alert("Loan denied!");
  }
  bankBalanceElement.innerText = bankBalanceAmount;
});
