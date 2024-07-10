import { dbank } from "../../declarations/dbank";


window.addEventListener("load", async function (){
  const currentAmount = await dbank.CheckBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
})

document.querySelector("form").addEventListener("submit", async function(event){
  event.preventDefault()
  console.log("Submitted");

  const button = document.getElementById("submit-btn");


  const inputAmout = parseFloat(document.getElementById("input-amount").value);
  const withdrawAmount = parseFloat(document.getElementById("withdrawal-amount").value);

  button.setAttribute("disabled", true);
  if(document.getElementById("input-amount").value.length != 0){
    await dbank.topUp(inputAmout);
  }
  
  if(document.getElementById("withdrawal-amount").value.length != 0){
    await dbank.Withdraw(withdrawAmount);
  }
  

  await dbank.Compound();
  const currentAmount = await dbank.CheckBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
  button.removeAttribute("disabled");
  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
})