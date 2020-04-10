import { gamepad } from "./gamepad";
import { dice } from "./dice";
import { players } from "./player";
import { screen_start } from "./screen_start";

let finished = false;
let activePlayer = 0;

//screen_start.draw();

function updatePlayerType(val) {
  screen_start.human[val.id] = val.value;
}

/*
while (!finished) {
  finished = true;

  move();
  update();
  draw();
}

//console.log("Game Over");
*/
draw();

function playerAction() {
  move();
  update();
  draw();
}

function move() {
  dice.roll();
}

function update() {
  let pos = 0;

  //move players
  if (dice.eyes === 6 && !players[activePlayer].isActive) {
    players[activePlayer].getOut();
  } else {
    pos = players[activePlayer].move(dice.eyes);
  }

  //check for collisions
  for (let i = 0; i < players.length; i++) {
    if (i === activePlayer) continue;

    players[i].popOut(pos);
  }

  //if dice != 6 next players turn
  if (dice.eyes !== 6) {
    activePlayer = activePlayer + 1 > 3 ? 0 : activePlayer + 1;
  }
}

function draw() {
  let html = "";
  let div = document.getElementById("app");
  html = "<h2>Active Player: " + (activePlayer + 1) + "</h2><br>";
  html += "<pre>" + gamepad.draw(players); //.replace(/\n/g, "<br>");
  html += "<br>" + dice.draw() + "</pre>"; //.replace(/\n/g, "<br>") + "</pre>";
  div.innerHTML = html;
}

document.getElementById("move").addEventListener("click", playerAction);
