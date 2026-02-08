"use strict";

function getComputerChoice() {
  let randomNum = Math.random();
  if (randomNum < 0.3) {
    return "rock";
  } else if (randomNum > 0.3 && randomNum < 0.7) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choiceFromPrompt = prompt("Enter your choice (rock, paper, scissors): ");
  return choiceFromPrompt;
}
