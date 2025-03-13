const bgctx = document.getElementById("gameArea").getContext("2d");
const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");
const canvasColor = "#c5fcf4";
const snakeColor = "red";
let time_period = 300; //time to move a unit for the snake(more the value, lesser the speed)
const playgroundSize = 500; //size of the playground
const w = 15; //width of a unit of snake
let score = 0; //keeps tracks of the score of the player

//snake coordinates

let x = w/2
let y = w/2

let movement; //tracks current movement

//creates the playground (canvas and snake)
function startNewGame(d = playgroundSize) {
  if (!canvas.getContext) {
    alert("Canvas not supported in your browser!");
    return;
  }
  bgctx.fillStyle = canvasColor;
  bgctx.beginPath(); //starts a new shape path
  bgctx.moveTo(0, 0); //goes to an initial point
  bgctx.lineTo(d, 0); //moves to another point for line
  bgctx.lineTo(d, d);
  bgctx.lineTo(0, d);
  bgctx.lineTo(0, 0);
  bgctx.fill();

  bgctx.save(); //saves the inital state of the canvas

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

  x += w
  y += 0
}
//moves the snake in negative x direction
function move_xN() {
  ctx.fillStyle = canvasColor;
  ctx.fillRect(0, 0, w, w);

  ctx.fillStyle = snakeColor;
  ctx.translate(-w, 0);
  ctx.fillRect(0, 0, w, w);

  x -= w
  y += 0
}
//moves the snake in positive y direction
function move_yP() {
  ctx.fillStyle = canvasColor;
  ctx.fillRect(0, 0, w, w);

  ctx.fillStyle = snakeColor;
  ctx.translate(0, -w);
  ctx.fillRect(0, 0, w, w);

  x += 0
  y -= w
}
//   moves the snake in negative y direction
function move_yN() {
  ctx.fillStyle = canvasColor;
  ctx.fillRect(0, 0, w, w);

  ctx.fillStyle = snakeColor;
  ctx.translate(0, w);
  ctx.fillRect(0, 0, w, w);

  x += 0
  y += w
}
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

  //TODO: this increses the score of the player
  function scoreUp(d = playgroundSize) {

    let a = Math.ceil(Math.random()*d)
    let b = Math.ceil(Math.random()*d)

    //adds food
    bgctx.fillStyle = "blue";
  bgctx.fillRect(a, b, w/4, w/4);

  setInterval (() => {
    if (Math.abs(x-a) <= w && Math.abs(y-b) <= w) {
        console.log("Intersected!");
    }


    // console.log("food: ", a,b);
    // console.log("snake", x, y);
}, 1000)


  }
  
startNewGame();
scoreUp()




