const canvas = document.getElementById("gameArea")
const bgctx = canvas.getContext("2d");
const player1_score_element = document.getElementById("player1_score");
const player1_speed_element = document.getElementById("player1_speed");

const player2_score_element = document.getElementById("player2_score");
const player2_speed_element = document.getElementById("player2_speed");


const ctx1 = document.getElementById("player1").getContext("2d");
const ctx2 = document.getElementById("player2").getContext("2d");

const canvasColor = "#1a472a";
const player1_color = "#4cff4c";
const player2_color = "pink";
const foodColor = "#ff3131";
let time_period = 200; //time to move a unit for the snake(more the value, lesser the speed)
const playgroundSize = 1000; //size of the playground
const w = 20; //width of a unit of snake
let score1 = 0; //keeps tracks of the score of the player1
let score2 = 0;

let speed1 = (w / time_period) * 1000;
let speed2 = (w / time_period) * 1000;
let movement1; //tracks current movement of player 1
let movement2; //tracks current movement of player 2

//Player coordinates
let p1X = 0;
let p1Y = playgroundSize / 2;

let p2X = playgroundSize - w;
let p2Y = playgroundSize / 2;

player1_speed_element.innerText = Math.floor(speed1);
player2_speed_element.innerText = Math.floor(speed2);

//add initial players body
ctx1.fillStyle = player1_color;
ctx1.fillRect(0, playgroundSize / 2, w, w);
ctx2.fillStyle = player2_color;
ctx2.fillRect(playgroundSize - w, playgroundSize / 2, w, w);

//creates the playground (canvas)
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

//moves the player in positive x direction
function move_xP(t) {
  //for player 1
  if (t == 1) {
    ctx1.clearRect(p1X, p1Y, w, w);
    ctx1.fillStyle = canvasColor;
    ctx1.fillRect(p1X, p1Y, w, w);

    ctx1.fillStyle = player1_color;
    ctx1.fillRect(p1X + w, p1Y, w, w);

    p1X += w;
    p1Y += 0;
  } else if (t == 2) {
    ctx2.clearRect(p2X, p2Y, w, w);
    ctx2.fillStyle = canvasColor;
    ctx2.fillRect(p2X, p2Y, w, w);

    ctx2.fillStyle = player2_color;
    ctx2.fillRect(p2X + w, p2Y, w, w);

    p2X += w;
    p2Y += 0;
  }
}
//moves the snake in negative x direction
function move_xN(t) {
  if (t == 1) {
    ctx1.clearRect(p1X, p1Y, w, w);
    ctx1.fillStyle = canvasColor;
    ctx1.fillRect(p1X, p1Y, w, w);

    ctx1.fillStyle = player1_color;
    ctx1.fillRect(p1X - w, p1Y, w, w);

    p1X -= w;
    p1Y += 0;
  } else if (t == 2) {
    ctx2.clearRect(p2X, p2Y, w, w);
    ctx2.fillStyle = canvasColor;
    ctx2.fillRect(p2X, p2Y, w, w);

    ctx2.fillStyle = player2_color;
    ctx2.fillRect(p2X - w, p2Y, w, w);

    p2X -= w;
    p2Y += 0;
  }
}
//moves the snake in positive p1Y direction
function move_yP(t) {
  if (t == 1) {
    ctx1.clearRect(p1X, p1Y, w, w);
    ctx1.fillStyle = canvasColor;
    ctx1.fillRect(p1X, p1Y, w, w);

    ctx1.fillStyle = player1_color;
    ctx1.fillRect(p1X, p1Y - w, w, w);

    p1X += 0;
    p1Y -= w;
  } else if (t == 2) {
    ctx2.clearRect(p2X, p2Y, w, w);
    ctx2.fillStyle = canvasColor;
    ctx2.fillRect(p2X, p2Y, w, w);

    ctx2.fillStyle = player2_color;
    ctx2.fillRect(p2X, p2Y - w, w, w);

    p2X += 0;
    p2Y -= w;
  }
}
//   moves the snake in negative p1Y direction
function move_yN(t) {
  if (t == 1) {
    ctx1.clearRect(p1X, p1Y, w, w);
    ctx1.fillStyle = canvasColor;
    ctx1.fillRect(p1X, p1Y, w, w);

    ctx1.fillStyle = player1_color;
    ctx1.fillRect(p1X, p1Y + w, w, w);

    p1X += 0;
    p1Y += w;
  } else if (t == 2) {
    ctx2.clearRect(p2X, p2Y, w, w);
    ctx2.fillStyle = canvasColor;
    ctx2.fillRect(p2X, p2Y, w, w);

    ctx2.fillStyle = player2_color;
    ctx2.fillRect(p2X, p2Y + w, w, w);

    p2X += 0;
    p2Y += w;
  }
}

//Adding controls to the game
window.addEventListener("keydown", (e) => {
  e.preventDefault();

  switch (e.key) {
    case "ArrowLeft":
      clearInterval(movement2);
      movement2 = setInterval(move_xN, time_period, 2);
      break;

    case "ArrowRight":
      clearInterval(movement2);
      movement2 = setInterval(move_xP, time_period, 2);
      break;

    case "ArrowUp":
      clearInterval(movement2);
      movement2 = setInterval(move_yP, time_period, 2);
      break;

    case "ArrowDown":
      clearInterval(movement2);
      movement2 = setInterval(move_yN, time_period, 2);
      break;

    case "A":
    case "a":
      clearInterval(movement1);
      movement1 = setInterval(move_xN, time_period, 1);
      break;

    case "D":
    case "d":
      clearInterval(movement1);
      movement1 = setInterval(move_xP, time_period, 1);
      break;

    case "W":
    case "w":
      clearInterval(movement1);
      movement1 = setInterval(move_yP, time_period, 1);
      break;

    case "S":
    case "s":
      clearInterval(movement1);
      movement1 = setInterval(move_yN, time_period, 1);
      break;

    case " ":
      clearInterval(movement1);
      clearInterval(movement2);
      break;
  }
});

// //Adds food and scores up if eaten
// function scoreUp(d = playgroundSize) {
//   let a = Math.floor(Math.random() * (d / w)) * w;
//   let b = Math.floor(Math.random() * (d / w)) * w;

//   //if food appears on the snake itself, respawn the food
//   if (a == x || b == y) {
//     scoreUp();
//     return;
//   }

//   console.log("Food:", a, b);

//   //adds food
//   bgctx.fillStyle = foodColor;
//   bgctx.fillRect(a, b, w, w);

//   const collision = setInterval(() => {
//     if (x == a && y == b) {
//       console.log("Collision!");
//       score += 10;
//       player_score_element.innerText = score;
//       time_period -= 5;
//       speed = (w / time_period) * 1000;
//       console.log(speed);
//       player_speed_element.innerText = Math.floor(speed);
//       clearInterval(collision);
//       startNewGame();
//       setTimeout(scoreUp, 0);
//     }
//   }, 10);
// }

startNewGame();
// scoreUp();
