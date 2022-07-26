let count = 0;

// creating a function when button increase is clicked
document.getElementById("increase").onclick = function increaseCount(){
    count += 1
    document.getElementById("count").innerHTML = count;
}