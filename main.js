"use strict";

const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");

let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
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

  console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`);
}

btnRock.addEventListener("click", () => {
  const computerSelectoin = getComputerChoice();
  playRound("rock", computerSelectoin);
});

btnPaper.addEventListener("click", () => {
  const computerSelectoin = getComputerChoice();
  playRound("paper", computerSelectoin);
});

btnScissors.addEventListener("click", () => {
  const computerSelectoin = getComputerChoice();
  playRound("scissors", computerSelectoin);
});
