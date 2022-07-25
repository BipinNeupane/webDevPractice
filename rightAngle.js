// declaring all variables of triangle sides
let c;
let a;
let b;
document.getElementById("myButton").onclick = function calculate(){
    // taking value from user and storing to a,b,c
    a = document.getElementById("inputa").value;
    b = document.getElementById("inputb").value;
    // c = underRoot(a^2+b^2)
    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("update").innerHTML = "The value of c is: " + c;
}