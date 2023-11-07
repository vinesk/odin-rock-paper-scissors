const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const getPlayerChoice = () => {
  let answer = "";
  while (answer !== "rock" && answer !== "paper" && answer !== "scissors") {
    answer = prompt("Choose your weapon: rock, paper or scissors?");
    answer = answer.toLowerCase();
  }
  return answer;
}

const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];

const playRound = (playerSelection, computerSelection) => {
  let round = `${playerSelection} vs ${computerSelection}`;
  if (round === "rock vs scissors" || round === "paper vs rock" || round === "scissors vs paper") {
    playerScore++;
    return `You win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection} (score: you = ${playerScore} & computer ${computerScore})`;
  } else if (round === "rock vs paper" || round === "paper vs scissors" || round === "scissors vs rock") {
    computerScore++;
    return `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection} (score: you = ${playerScore} & computer ${computerScore})`;
  } else {
    return `It's a tie! (score: you = ${playerScore} & computer ${computerScore})`;
  }
}

const game = () => {
  console.log("Instructions: Play \"rock, paper, scissors\" in 5 rounds");
  for (let i = 0 ; i < 5 ; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    console.log("RESULT: YOU'VE WON :)");
  } else if (playerScore < computerScore) {
    console.log("RESULT: YOU'VE LOST :(");
  } else {
    console.log("RESULT: IT'S A TIE");
  }
}

game();