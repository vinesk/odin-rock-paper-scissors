let userScore = document.querySelector("#userScore");
let userSelection = document.querySelector("#userSelection");
let computerScore = document.querySelector("#computerScore");
let computerSelection = document.querySelector("#computerSelection");
let instructionsRow = document.querySelectorAll(".instructions-row")[0];
let rules = document.querySelector("#rules");
let reset = document.querySelector("#reset");
let choicesRow = document.querySelectorAll(".choices-row")[0];
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let userPoints = 0;
let computerPoints = 0;

const playRound = (userChoice) => {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  userSelection.textContent = `Your selection: ${userChoice}`;
  computerSelection.textContent = `Computer selection: ${computerChoice}`;
  if (
    (userChoice == "rock" && computerChoice == "scissors") ||
    (userChoice == "paper" && computerChoice == "rock") ||
    (userChoice == "scissors" && computerChoice == "paper")
  ) {
    rules.textContent = "You win !";
    userPoints += 1;
    userScore.textContent = userPoints;
  } else if (
    (userChoice == "rock" && computerChoice == "paper") ||
    (userChoice == "paper" && computerChoice == "scissors") ||
    (userChoice == "scissors" && computerChoice == "rock")
  ) {
    rules.textContent = "You lose !";
    computerPoints += 1;
    computerScore.textContent = computerPoints;
  } else {
    rules.textContent = "It's a tie !";
  }
};

const playGame = (userChoice) => {
  playRound(userChoice);
  if (userPoints == 5 || computerPoints == 5) {
    rules.textContent = "Game over: ";
    rules.textContent += userPoints == 5 ? "You win !!!" : "You lose...";
    reset.style.display = "flex";
    choicesRow.style.display = "none";
  }
};

const replayGame = () => {
  userPoints = 0;
  computerPoints = 0;
  userScore.textContent = userPoints;
  computerScore.textContent = computerPoints;
  userSelection.textContent = "Your choice: ";
  computerSelection.textContent = "Computer choice: ";
  rules.textContent = "Select rock, paper or scissors.";
  reset.style.display = "none";
  choicesRow.style.display = "flex";
};

rock.onclick = () => playGame("rock");
paper.onclick = () => playGame("paper");
scissors.onclick = () => playGame("scissors");
reset.onclick = () => replayGame();
