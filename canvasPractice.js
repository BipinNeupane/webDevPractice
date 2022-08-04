let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");
let appearButton = document.getElementById("myButton");
let removeButton = document.getElementById("remove");

// create a X in context
appearButton.onclick = () => {
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo(500, 500);
  context.moveTo(500, 0);
  context.lineTo(0, 500);
  context.moveTo(250, 0);
  context.lineTo(250, 500);
  context.moveTo(0, 250);
  context.lineTo(500, 250);
  context.lineWidth = 5;
  context.stroke();
};

removeButton.onclick = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};
