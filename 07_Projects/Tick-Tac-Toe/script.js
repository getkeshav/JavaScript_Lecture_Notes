const canvas = document.getElementById("gameArea"); //selects the canvas element
const ctx = canvas.getContext("2d"); //creates a 2d context for the canavas
const boxSize = 200; //initializes the size of the grid (box)
let isCross = false; //keeps track of the upcoming move (cross or circle)
let boxValues = []; //keeps track of the move played in each box

//makes a new empty canvas
function startNewGame(d = boxSize) {
  if (!canvas.getContext) {
    alert("Canvas not supported in your browser!");
    return;
  }
  ctx.beginPath(); //starts a new shape path
  ctx.moveTo(0, d); //goes to an initial point
  ctx.lineTo(3 * d, d); //moves to another point for line
  ctx.stroke(); //strokes between the two points

  ctx.beginPath();
  ctx.moveTo(0, 2 * d);
  ctx.lineTo(3 * d, 2 * d);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(d, 0);
  ctx.lineTo(d, 3 * d);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(2 * d, 0);
  ctx.lineTo(2 * d, 3 * d);
  ctx.stroke();
}
// used to add a circle to any box (n)
function circle(n, d = boxSize) {
  if (n <= 0 || n > 9) return;
  let x = (((n - 1) % 3) + 1) * d - d / 2; // x-coordinate of the center of the circle in the box
  let y = Math.floor((n + 2) / 3) * d - d / 2; // y-coordinate of the center of the circle in the box

  ctx.beginPath();
  ctx.arc(x, y, d / 3, 0, 360);
  ctx.stroke();
}
// used to add a cross to any box (n)
function cross(n, d = boxSize) {
  if (n <= 0 || n > 9) return;

  const x1 = ((n - 1) % 3) * d + d / 5;
  const y1 = Math.floor((n - 1) / 3) * d + d / 5;
  const x2 = ((n - 1) % 3) * d + (4 * d) / 5;
  const y2 = Math.floor((n - 1) / 3) * d + (4 * d) / 5;

  //making one line of the cross
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  const x3 = ((n - 1) % 3) * d + (4 * d) / 5;
  const y3 = Math.floor((n - 1) / 3) * d + d / 5;

  const x4 = ((n - 1) % 3) * d + d / 5;
  const y4 = Math.floor((n - 1) / 3) * d + (4 * d) / 5;

  //making second line of the cross
  ctx.beginPath();
  ctx.moveTo(x3, y3);
  ctx.lineTo(x4, y4);
  ctx.stroke();
}
//used to actually add a move to the grid (box)
function makeMove(boxNumber) {
  if (isCross && boxValues[boxNumber - 1] == undefined) {
    cross(boxNumber);
    isCross = false;
    boxValues[boxNumber - 1] = "cross";
  } else if (!isCross && boxValues[boxNumber - 1] == undefined) {
    circle(boxNumber);
    isCross = true;
    boxValues[boxNumber - 1] = "circle";
  }
}

//Attach the keys to play the moves and call makeMove()
window.addEventListener("keypress", (e) => {
  let box;
  if (e.key >= 1 && e.key <= 3) box = Number(e.key) + 6;
  else if (e.key >= 7 && e.key <= 9) box = Number(e.key) - 6;
  else if (e.key >= 4 && e.key <= 6) box = Number(e.key);

  makeMove(box);
});

startNewGame(boxSize);
