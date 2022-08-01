const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

//load images
const bird = new Image();
const bg = new Image();
const fg = new Image();
const pipeNorth = new Image();
const pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

//our variables
let gap = 85;
let constant = pipeNorth.height + gap;

//draw images
function draw() {
  ctx.drawImage(bg, 0, 0);
  ctx.drawImage(pipeNorth, 100, 0);
  ctx.drawImage(pipeSouth, 100, 0 + constant);

  ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(bird, 10, 150);
}
alert("loading images");
draw();
