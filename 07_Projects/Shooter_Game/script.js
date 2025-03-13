const bgctx = document.getElementById("gameArea").getContext("2d");
const player_score_element = document.getElementById("player_score");
const player_speed_element = document.getElementById("player_speed");
const canvas = document.getElementById("snake");
const ctx = canvas.getContext("2d");
const canvasColor = "#1a472a";
const snakeColor = "#4cff4c";
const foodColor = "#ff3131";
let time_period = 100; //time to move a unit for the snake(more the value, lesser the speed)
const playgroundSize = 500; //size of the playground
const w = 15; //width of a unit of snake
let score = 0; //keeps tracks of the score of the player
let speed = (w / time_period) * 1000;
let movement; //tracks current movement

//snake coordinates
let x = 0;
let y = 0;

player_speed_element.innerText = Math.floor(speed);

//add initial snake body
ctx.fillStyle = snakeColor;
ctx.fillRect(0, 0, w, w);


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
}

//moves the snake in positive x direction
function move_xP() {
    ctx.clearRect (x, y, w, w)
  ctx.fillStyle = canvasColor;
  ctx.fillRect (x,y, w, w)

  ctx.fillStyle = snakeColor
  ctx.fillRect (x+w,y, w, w)

  x += w;
  y += 0;
}
//moves the snake in negative x direction
function move_xN() {
    ctx.clearRect (x, y, w, w)
    ctx.fillStyle = canvasColor;
    ctx.fillRect (x,y, w, w)
  
    ctx.fillStyle = snakeColor
    ctx.fillRect (x-w,y, w, w)

  x -= w;
  y += 0;
}
//moves the snake in positive y direction
function move_yP() {
    ctx.clearRect (x, y, w, w)
    ctx.fillStyle = canvasColor;
    ctx.fillRect (x,y, w, w)
  
    ctx.fillStyle = snakeColor
    ctx.fillRect (x,y-w, w, w)

  x += 0;
  y -= w;
}
//   moves the snake in negative y direction
function move_yN() {
    ctx.clearRect (x, y, w, w)
    ctx.fillStyle = canvasColor;
    ctx.fillRect (x,y, w, w)
  
    ctx.fillStyle = snakeColor
    ctx.fillRect (x,y+w, w, w)

  x += 0;
  y += w;
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
//Adds food and scores up if eaten
function scoreUp(d = playgroundSize) {
  let a = Math.floor(Math.random() * (d/w))*w;
  let b = Math.floor(Math.random() * (d/w))*w;

  //if food appears on the snake itself, respawn the food
  if (a == x || b == y) {
    scoreUp()
    return;
  }

  console.log("Food:", a, b);

  //adds food
  bgctx.fillStyle = foodColor;
  bgctx.fillRect(a, b, w, w);

  const collision = setInterval(() => {
    if (x == a && y == b) {
      console.log("Collision!");
      score += 10;
      player_score_element.innerText = score;
      time_period -= 5;
      speed = (w / time_period) * 1000;
      console.log(speed);
      player_speed_element.innerText = Math.floor(speed);
      clearInterval(collision);
     startNewGame()
      setTimeout (scoreUp, 0)
    }
  }, 10);
}

startNewGame();
scoreUp();
