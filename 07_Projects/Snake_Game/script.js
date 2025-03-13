const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");
const canvasColor = "#d599de";
const snakeColor = "red";
let time_period = 300; //time to move a unit for the snake(more the value, lesser the speed)
const playgroundSize = 500; //size of the playground
const w = 15; //width of a unit of snake

let movement; //tracks current movement

//creates the playground (canvas and snake)
function startNewGame(d = playgroundSize) {
  if (!canvas.getContext) {
    alert("Canvas not supported in your browser!");
    return;
  }
  ctx.fillStyle = canvasColor;
  ctx.beginPath(); //starts a new shape path
  ctx.moveTo(0, 0); //goes to an initial point
  ctx.lineTo(d, 0); //moves to another point for line
  ctx.lineTo(d, d);
  ctx.lineTo(0, d);
  ctx.lineTo(0, 0);
  ctx.fill();

  ctx.save(); //saves the inital state of the canvas

  //add initial snake body
  ctx.fillStyle = snakeColor;
  ctx.fillRect(0, 0, w, w);
}

//moves the snake in positive x direction
function move_xP() {
  ctx.fillStyle = canvasColor;
  ctx.fillRect(0, 0, w, w);

  ctx.fillStyle = snakeColor;
  ctx.translate(w, 0);
  ctx.fillRect(0, 0, w, w);
}

//moves the snake in positive x direction
function move_xN() {
  ctx.fillStyle = canvasColor;
  ctx.fillRect(0, 0, w, w);

  ctx.fillStyle = snakeColor;
  ctx.translate(-w, 0);
  ctx.fillRect(0, 0, w, w);
}

//moves the snake in positive x direction
function move_yP() {
  ctx.fillStyle = canvasColor;
  ctx.fillRect(0, 0, w, w);

  ctx.fillStyle = snakeColor;
  ctx.translate(0, -w);
  ctx.fillRect(0, 0, w, w);
}

//   moves the snake in positive x direction
function move_yN() {
  ctx.fillStyle = canvasColor;
  ctx.fillRect(0, 0, w, w);

  ctx.fillStyle = snakeColor;
  ctx.translate(0, w);
  ctx.fillRect(0, 0, w, w);
}

startNewGame();

//Adding controls to the game
window.addEventListener("keydown", (e) => {
  e.preventDefault();

  switch (e.key) {
    case "ArrowLeft":
    case "A":
    case "a":
      clearInterval(movement);
      movement = setInterval(move_xN, time_period);
      break;

    case "ArrowRight":
    case "D":
    case "d":
      clearInterval(movement);
      movement = setInterval(move_xP, time_period);
      break;

    case "ArrowUp":
    case "W":
    case "w":
      clearInterval(movement);
      movement = setInterval(move_yP, time_period);
      break;

    case "ArrowDown":
    case "S":
    case "s":
      clearInterval(movement);
      movement = setInterval(move_yN, time_period);
      break;

    case " ":
      clearInterval(movement);
      break;
  }
});
