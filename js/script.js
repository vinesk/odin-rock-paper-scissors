let choices = ["Rock", "Paper", "Scissors"];

const caseSensitive = (string) =>
  string.charAt(0).toLocaleUpperCase() + string.slice(1).toLowerCase();

const getPlayerChoice = () => {
  let playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors?");
  playerSelection = caseSensitive(playerSelection);
  while (
    playerSelection != "Rock" &&
    playerSelection != "Paper" &&
    playerSelection != "Scissors"
  ) {
    playerSelection = prompt("Wrong! Choose between Rock, Paper and Scissors!");
    playerSelection = caseSensitive(playerSelection);
  }
  return playerSelection;
};

const getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection) {
    case "Rock":
      switch (computerSelection) {
        case "Rock":
          return "It's a tie";
        case "Paper":
          return `You lose! ${computerSelection} beats ${playerSelection}`;
        case "Scissors":
          return `You win! ${playerSelection} beats ${computerSelection}`;
        default:
          return "Error! Computer selection undifined";
      }
    case "Paper":
      switch (computerSelection) {
        case "Rock":
          return `You win! ${playerSelection} beats ${computerSelection}`;
        case "Paper":
          return "It's a tie";
        case "Scissors":
          return `You lose! ${computerSelection} beats ${playerSelection}`;
        default:
          return "Error! Computer selection undifined";
      }
    case "Scissors":
      switch (computerSelection) {
        case "Rock":
          return `You lose! ${computerSelection} beats ${playerSelection}`;
        case "Paper":
          return `You win! ${playerSelection} beats ${computerSelection}`;
        case "Scissors":
          return "It's a tie";
        default:
          return "Error! Computer selection undifined";
      }
    default:
      return "Error! Player selection undifined";
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let rounds = parseInt(prompt("How many rounds do you want to play (between 1 and 5)?"));
  while (isNaN(rounds) || rounds < 0 || rounds > 5) {
    rounds = parseInt(prompt("Wrong! Choose a number between 1 and 5 to play"));
  }
  for (let i = 0; i < rounds; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    alert(`Round ${i + 1}: ${result}`);
    if (result.startsWith("You win")) {
      playerScore++;
    } else if (result.startsWith("You lose")) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    return `Congratulations! You've won ${playerScore} against ${computerScore} :)`;
  } else if (playerScore < computerScore) {
    return `Too bad! You lost ${playerScore} against ${computerScore} :(`;
  } else {
    return "Well done! It's a tie";
  }
};

alert(game());
