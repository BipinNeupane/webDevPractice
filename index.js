document.getElementById("p1").innerHTML = "Enter your username: ";

let textValue;

document.getElementById("myButton").onclick = function changeNames(){
     textValue = document.getElementById("myInput").value;
     document.getElementById("p1").innerHTML = "Welcome Back! " + textValue;
     document.getElementById("headText").innerHTML = "You are a beast " + textValue;

}




