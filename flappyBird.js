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

let bX = 10;
let bY = 150;

let gravity = 1.5;

//on key down
document.addEventListener("keydown", moveUp);

function moveUp() {
  bY -= 25;
}

//pipe cordinates
let pipe = [];

pipe[0] = {
  x: cvs.width,
  y: 0,
};

//draw images
function draw() {
  ctx.drawImage(bg, 0, 0);

  for (let i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);

    pipe[i].x--;

    if (pipe[i].x == 125) {
      pipe.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height,
      });
    }
  }

  ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(bird, bX, bY);

  bY += gravity;

  requestAnimationFrame(draw);
}
alert("loading images");
draw();
