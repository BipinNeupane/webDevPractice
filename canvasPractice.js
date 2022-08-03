let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");
let button = document.getElementById("myButton");

// create a X in context


button.onclick = () => {
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
