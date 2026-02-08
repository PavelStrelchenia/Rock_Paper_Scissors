"use strict";

function getComputerChoice() {
  let randomNum = Math.random();
  if (randomNum < 0.3) {
    return "Rock";
  } else if (randomNum > 0.3 && randomNum < 0.7) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
