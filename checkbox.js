// created onclick method for submit button
document.getElementById("submitBtn").onclick = function afterCheck(){
// stored every clicked funtion in a variable
const visaClicked = document.getElementById("visaBtn");
const mastercardClicked = document.getElementById("mastercard");
const paypalClicked = document.getElementById("paypal");
const pTag = document.getElementById("result");

// created an if statement and using .checked method for result
if(visaClicked.checked){
    pTag.innerHTML="Enter your visa details."
 }
 else if(mastercardClicked.checked){
    pTag.innerHTML="Enter your mastercard details."
 }
 else if(paypalClicked.checked){
    pTag.innerHTML="Enter your paypal details."
 }
 else{
    pTag.innerHTML="You must select a payment method";
 }

}