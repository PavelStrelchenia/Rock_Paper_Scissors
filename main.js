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
  let choiceFromPrompt = prompt(
    "Enter your choice (rock, paper, scissors): ",
  ).toLowerCase();
  return choiceFromPrompt;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    humanScore++;
    computerScore++;
    console.log("Its a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`${humanScore} : ${computerScore}`);
  }

  if (humanScore > computerScore) {
    console.log("You won!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("Tie!");
  }
}

playGame();
