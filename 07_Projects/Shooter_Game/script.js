const playgroundSize = 500; //size of the playground
const w = 20; //width of a unit of snake

const player1 = {
  color: "red",
  time_period: 200,
  score: 0,
  speed: (w / this.time_period) * 1000,
  movement : undefined,
  X: 0,
  Y: playgroundSize / 2,
  bullet_color: "yellow",
};

const player2 = {
  color: "blue",
  time_period: 200,
  score: 0,
  speed: (w / this.time_period) * 1000,
  movement : undefined,
  X: playgroundSize - w,
  Y: playgroundSize / 2,
  bullet_color: "pink",
};

//General
const canvas = document.getElementById("gameArea");
const bgctx = canvas.getContext("2d");
const canvasColor = "grey";
const foodColor = "#ff3131";


//For Player 1
const ctx1 = document.getElementById("player1").getContext("2d");
const player1_score_element = document.getElementById("player1_score");
const player1_speed_element = document.getElementById("player1_speed");
player1_speed_element.innerText = Math.floor(player1.speed);
ctx1.fillStyle = player1.color;
ctx1.fillRect(0, playgroundSize / 2, w, w);

//For Player 2
const ctx2 = document.getElementById("player2").getContext("2d");
const player2_score_element = document.getElementById("player2_score");
const player2_speed_element = document.getElementById("player2_speed");
player2_speed_element.innerText = Math.floor(player2.speed);
//add initial players body
ctx2.fillStyle = player2.color;
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
//shoots the bullet in positive x direction
function shoot1(p, q) {
  const gun_shoot = setInterval(() => {
    p += w / 2.5;
    ctx1.clearRect(p - w / 2.5, q, w / 2.5, w / 2.5);
    ctx1.fillStyle = player1.bullet_color;
    ctx1.fillRect(p, q, w / 2.5, w / 2.5);

    if (p >= playgroundSize) {
      clearInterval(gun_shoot);
      console.log("Cleared!");
    }
  }, player1.time_period / 4);
}
function shoot2(p, q) {
  const gun_shoot2 = setInterval(() => {
    p -= w / 2.5;
    ctx2.clearRect(p + w / 2.5, q, w / 2.5, w / 2.5);
    ctx2.fillStyle = player2.bullet_color;
    ctx2.fillRect(p, q, w / 2.5, w / 2.5);

    if (p < -w / 2.5) {
      clearInterval(gun_shoot2);
      console.log("Cleared shoot 2!");
    }
  }, player1.time_period / 4);
}

function move_xP(t) {
  if (t == 1 && player1.X + w <= playgroundSize - w) {
    player1.X += w; // Update position first
    ctx1.clearRect(player1.X - w, player1.Y, w, w);
    ctx1.fillStyle = player1.color;
    ctx1.fillRect(player1.X, player1.Y, w, w);
  } else if (t == 2 && player2.X + w <= playgroundSize - w) {
    player2.X += w;
    ctx2.clearRect(player2.X - w, player2.Y, w, w);
    ctx2.fillStyle = player2.color;
    ctx2.fillRect(player2.X, player2.Y, w, w);
  }
}

function move_xN(t) {
  if (t == 1 && player1.X - w >= 0) {
    player1.X -= w;
    ctx1.clearRect(player1.X + w, player1.Y, w, w);
    ctx1.fillStyle = player1.color;
    ctx1.fillRect(player1.X, player1.Y, w, w);
  } else if (t == 2 && player2.X - w >= 0) {
    player2.X -= w;
    ctx2.clearRect(player2.X + w, player2.Y, w, w);
    ctx2.fillStyle = player2.color;
    ctx2.fillRect(player2.X, player2.Y, w, w);
  }
}

function move_yP(t) {
  if (t == 1 && player1.Y - w >= 0) {
    player1.Y -= w;
    ctx1.clearRect(player1.X, player1.Y + w, w, w);
    ctx1.fillStyle = player1.color;
    ctx1.fillRect(player1.X, player1.Y, w, w);
  } else if (t == 2 && player2.Y - w >= 0) {
    player2.Y -= w;
    ctx2.clearRect(player2.X, player2.Y + w, w, w);
    ctx2.fillStyle = player2.color;
    ctx2.fillRect(player2.X, player2.Y, w, w);
  }
}

function move_yN(t) {
  if (t == 1 && player1.Y + w <= playgroundSize - w) {
    player1.Y += w;
    ctx1.clearRect(player1.X, player1.Y - w, w, w);
    ctx1.fillStyle = player1.color;
    ctx1.fillRect(player1.X, player1.Y, w, w);
  } else if (t == 2 && player2.Y + w <= playgroundSize - w) {
    player2.Y += w;
    ctx2.clearRect(player2.X, player2.Y - w, w, w);
    ctx2.fillStyle = player2.color;
    ctx2.fillRect(player2.X, player2.Y, w, w);
  }
}

//Adding controls to the game
window.addEventListener("keydown", (e) => {
  e.preventDefault();

  switch (e.key) {
    case "ArrowLeft":
      clearInterval(player2.movement);
      player2.movement = setInterval(move_xN, player2.time_period, 2);
      break;

    case "ArrowRight":
      clearInterval(player2.movement);
      player2.movement = setInterval(move_xP, player2.time_period, 2);
      break;

    case "ArrowUp":
      clearInterval(player2.movement);
      player2.movement = setInterval(move_yP, player2.time_period, 2);
      break;

    case "ArrowDown":
      clearInterval(player2.movement);
      player2.movement = setInterval(move_yN, player2.time_period, 2);
      break;

    case "A":
    case "a":
      clearInterval(player1.movement);
      player1.movement = setInterval(move_xN, player1.time_period, 1);
      break;

    case "D":
    case "d":
      clearInterval(player1.movement);
      player1.movement = setInterval(move_xP, player1.time_period, 1);
      break;

    case "W":
    case "w":
      clearInterval(player1.movement);
      player1.movement = setInterval(move_yP, player1.time_period, 1);
      break;

    case "S":
    case "s":
      clearInterval(player1.movement);
      player1.movement = setInterval(move_yN, player1.time_period, 1);
      break;

    case " ":
      clearInterval(player1.movement);
      clearInterval(player2.movement);
      break;

    //for player 1 shoot1
    case "e":
    case "E":
      shoot1(player1.X + w, player1.Y + w / 2.5);
      player1.score -= 5;
      player1_score_element.innerText = player1.score;
      break;

    case "0":
      shoot2(player2.X - w, player2.Y + w / 2.5);
      player2.score -= 5;
      player2_score_element.innerText = player2.score;
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
