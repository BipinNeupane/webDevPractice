// format :
// anything.toLocaleString("local" , {style : option} , option : " ");
// if it is an unit of any measurment put "unit" in style unit : unit must be small letter

document.getElementById("myButton").onclick = function afterclick() {
  let inputValue = document.getElementById("myInput").value;
  inputValue = Number(inputValue);
  let english = inputValue.toLocaleString("en-US");
  console.log(english);
  document.getElementById("inEnglish").innerHTML = english;
  let indianRs = inputValue.toLocaleString("hi-IN", {
    style: "currency",
    currency: "INR",
  });
  document.getElementById("inRupees").innerHTML = indianRs;
  let inKm = inputValue.toLocaleString(undefined, {
    style: "unit",
    unit: "kilometer",
  });
  document.getElementById("inKm").innerHTML = "You have walked " + inKm;
  
  let inUSD = inputValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  document.getElementById("inDollar").innerHTML = inUSD;
};
