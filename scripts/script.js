const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const capitalizedFirstLetter = (word) => {
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
    return `You win! ${capitalizedFirstLetter(playerSelection)} beats ${computerSelection} (score: you = ${playerScore} & computer ${computerScore})`;
  } else if (round === "rock vs paper" || round === "paper vs scissors" || round === "scissors vs rock") {
    computerScore++;
    return `You lose! ${capitalizedFirstLetter(computerSelection)} beats ${playerSelection} (score: you = ${playerScore} & computer ${computerScore})`;
  } else {
    return `It's a tie! (score: you = ${playerScore} & computer ${computerScore})`;
  }
}

const game = () => {
  console.log("Instructions: Play \"rock, paper, scissors\", first to 5 wins");
  while (playerScore !== 5 && computerScore !== 5) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    console.log("RESULT: YOU'VE WON :)");
  } else {
    console.log("RESULT: YOU'VE LOST :(");
  }
}

game();