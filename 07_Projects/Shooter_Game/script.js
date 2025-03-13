const arena_size = 500; //size of the playground
const player_size = 20; //size of the players
let time_left = 61;

const player1 = {
  color: "red",
  time_period: 150,
  score: 100,
  movement: undefined,
  X: 0,
  Y: arena_size / 2,
  bullet_color: "#590707",
};

const player2 = {
  color: "blue",
  time_period: 150,
  score: 100,
  movement: undefined,
  X: arena_size - player_size,
  Y: arena_size / 2,
  bullet_color: "#361d75",
};

//General
const time_left_elem = document.getElementById("timeLeft");
const canvas = document.getElementById("gameArea");
const bgctx = canvas.getContext("2d");
const canvasColor = "#59f06d";
const foodColor = "#ff3131";

//For Player 1
const ctx1 = document.getElementById("player1").getContext("2d");
const player1_score_element = document.getElementById("player1_score");
player1_score_element.innerText = player1.score;
ctx1.fillStyle = player1.color;
ctx1.fillRect(0, arena_size / 2, player_size, player_size);

//For Player 2
const ctx2 = document.getElementById("player2").getContext("2d");
const player2_score_element = document.getElementById("player2_score");
player2_score_element.innerText = player2.score;
ctx2.fillStyle = player2.color;
ctx2.fillRect(
  arena_size - player_size,
  arena_size / 2,
  player_size,
  player_size
);

//creates the playground (canvas)
function startNewGame(d = arena_size) {
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

  bgctx.moveTo(arena_size / 2, 0);
  bgctx.lineTo(arena_size / 2, arena_size);
  bgctx.stroke();
}
//shoots the bullet in positive x direction
function shoot1(p, q) {
  player1.score -= 2;
  player1_score_element.innerText = player1.score;
  const gun_shoot = setInterval(() => {
    p += player_size / 2.5;
    ctx1.clearRect(
      p - player_size / 2.5,
      q,
      player_size / 2.5,
      player_size / 2.5
    );
    ctx1.fillStyle = player1.bullet_color;
    ctx1.fillRect(p, q, player_size / 2.5, player_size / 2.5);

    if (hit_detection(p, q, 1)) {
      player1.score += 10;
      player1_score_element.innerText = player1.score;
      player2.score -= 5;
      player2_score_element.innerText = player2.score;
      console.log("Player 1 hit Player 2!");
      ctx1.clearRect(p, q, player_size / 2.5, player_size / 2.5);
      clearInterval(gun_shoot);
      return;
    }

    if (p >= arena_size) {
      clearInterval(gun_shoot);
    }
  }, player1.time_period / 4);
}
function shoot2(p, q) {
  player2.score -= 2;
  player2_score_element.innerText = player2.score;
  const gun_shoot2 = setInterval(() => {
    p -= player_size / 2.5;
    ctx2.clearRect(
      p + player_size / 2.5,
      q,
      player_size / 2.5,
      player_size / 2.5
    );
    ctx2.fillStyle = player2.bullet_color;
    ctx2.fillRect(p, q, player_size / 2.5, player_size / 2.5);

    if (hit_detection(p, q, 2)) {
      player2.score += 10;
      player2_score_element.innerText = player2.score;
      player1.score -= 5;
      player1_score_element.innerText = player1.score;
      console.log("Player 2 hit Player 1!");
      ctx2.clearRect(p, q, player_size / 2.5, player_size / 2.5);
      clearInterval(gun_shoot2);
      return;
    }

    if (p < -player_size / 2.5) {
      clearInterval(gun_shoot2);
      console.log("Cleared shoot 2!");
    }
  }, player1.time_period / 4);
}

function move_xP(t) {
  if (t == 1 && player1.X + player_size <= arena_size / 2 - player_size) {
    player1.X += player_size; // Update position first
    ctx1.clearRect(
      player1.X - player_size,
      player1.Y,
      player_size,
      player_size
    );
    ctx1.fillStyle = player1.color;
    ctx1.fillRect(player1.X, player1.Y, player_size, player_size);
  } else if (t == 2 && player2.X + player_size <= arena_size - player_size) {
    player2.X += player_size;
    ctx2.clearRect(
      player2.X - player_size,
      player2.Y,
      player_size,
      player_size
    );
    ctx2.fillStyle = player2.color;
    ctx2.fillRect(player2.X, player2.Y, player_size, player_size);
  }
}

function move_xN(t) {
  if (t == 1 && player1.X - player_size >= 0) {
    player1.X -= player_size;
    ctx1.clearRect(
      player1.X + player_size,
      player1.Y,
      player_size,
      player_size
    );
    ctx1.fillStyle = player1.color;
    ctx1.fillRect(player1.X, player1.Y, player_size, player_size);
  } else if (t == 2 && player2.X >= arena_size / 2 + player_size) {
    player2.X -= player_size;
    ctx2.clearRect(
      player2.X + player_size,
      player2.Y,
      player_size,
      player_size
    );
    ctx2.fillStyle = player2.color;
    ctx2.fillRect(player2.X, player2.Y, player_size, player_size);
  }
}

function move_yP(t) {
  if (t == 1 && player1.Y - player_size >= 0) {
    player1.Y -= player_size;
    ctx1.clearRect(
      player1.X,
      player1.Y + player_size,
      player_size,
      player_size
    );
    ctx1.fillStyle = player1.color;
    ctx1.fillRect(player1.X, player1.Y, player_size, player_size);
  } else if (t == 2 && player2.Y - player_size >= 0) {
    player2.Y -= player_size;
    ctx2.clearRect(
      player2.X,
      player2.Y + player_size,
      player_size,
      player_size
    );
    ctx2.fillStyle = player2.color;
    ctx2.fillRect(player2.X, player2.Y, player_size, player_size);
  }
}

function move_yN(t) {
  if (t == 1 && player1.Y + player_size <= arena_size - player_size) {
    player1.Y += player_size;
    ctx1.clearRect(
      player1.X,
      player1.Y - player_size,
      player_size,
      player_size
    );
    ctx1.fillStyle = player1.color;
    ctx1.fillRect(player1.X, player1.Y, player_size, player_size);
  } else if (t == 2 && player2.Y + player_size <= arena_size - player_size) {
    player2.Y += player_size;
    ctx2.clearRect(
      player2.X,
      player2.Y - player_size,
      player_size,
      player_size
    );
    ctx2.fillStyle = player2.color;
    ctx2.fillRect(player2.X, player2.Y, player_size, player_size);
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
      shoot1(player1.X + player_size, player1.Y + player_size / 2.5);

      break;

    case "0":
      shoot2(player2.X - player_size, player2.Y + player_size / 2.5);

      break;
  }
});

startNewGame();

function hit_detection(p, q, player_number) {
  if (
    player_number == 1 &&
    Math.abs(p - player2.X) <= 8 &&
    Math.abs(player2.Y - q) <= 8
  )
    return true;
  else if (
    player_number == 2 &&
    Math.abs(p - player1.X) <= 8 &&
    Math.abs(player1.Y - q) <= 8
  )
    return true;
}

// function check_winner() {
//   setTimeout(() => {
//     window.removeEventListener("keydown", check_winner);
//     if (player1.score > player2.score) {
//       alert("Player 1 won!");
//     } else if (player1.score < player2.score) {
//       alert("Player 2 won!");
//     } else {
//       alert("Draw!");
//     }
//   }, 5000);
// }
// window.addEventListener("keydown", check_winner);

const check_winner = setInterval(() => {
  console.log(time_left);
  time_left--;
  time_left_elem.innerText = time_left;
  if (time_left == -1) {
    clearInterval(check_winner);
    if (player1.score > player2.score) alert("Player 1 won!");
    else if (player1.score < player2.score) alert("Player 2 won!");
    else alert("Draw!");
  }
}, 1000);
