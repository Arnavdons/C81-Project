var Canvas=document.getElementById("myCanvas");
var ctx=Canvas.getContext("2d");

var color1="blue";
var color2="black";
var color3="red";
var color4="yellow";
var color5="green";

ctx.beginPath();
ctx.strokeStyle=color3;
ctx.lineWidth=1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color1;
ctx.lineWidth=5;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color2;
ctx.lineWidth=5;
ctx.arc(350,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color3;
ctx.lineWidth=5;
ctx.arc(450,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color4;
ctx.lineWidth=5;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle=color5;
ctx.lineWidth=5;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();