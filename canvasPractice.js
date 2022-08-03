let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");

// create a X in context
context.beginPath();
context.moveTo(0,0);
context.lineTo(500,500);
context.moveTo(500,0);
context.lineTo(0,500);
context.moveTo(250,0);
context.lineTo(250,500);
context.moveTo(0,250);
context.lineTo(500,250); 
context.stroke();
