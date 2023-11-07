let playerScore = 0;
let computerScore = 0;

const camelCase = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

const playRound = (playerSelection, computerSelection) => {
  const results = document.querySelector("#results");
  
  let round = `${playerSelection} vs ${computerSelection}`;
  if (round === "rock vs scissors" || round === "paper vs rock" || round === "scissors vs paper") {
    playerScore++;
    results.textContent = `You win! ${camelCase(playerSelection)} beats ${computerSelection} (score: you = ${playerScore} & computer ${computerScore})`;
  } else if (round === "rock vs paper" || round === "paper vs scissors" || round === "scissors vs rock") {
    computerScore++;
    results.textContent = `You lose! ${camelCase(computerSelection)} beats ${playerSelection} (score: you = ${playerScore} & computer ${computerScore})`;
  } else {
    results.textContent = `It's a tie! (score: you = ${playerScore} & computer ${computerScore})`;
  }
}

const game = () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      const playerSelection = e.target.textContent.toLowerCase();
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);

      if (playerScore === 5 || computerScore === 5) {
        const container = document.querySelector("#container");
        container.innerHTML = "";
        const results = document.createElement("div");
        results.setAttribute("id", "results");
        if (playerScore > computerScore) {
          results.textContent = "RESULTS: YOU'VE WON :)"
        } else if (playerScore < computerScore) {
          results.textContent = "RESULTS: YOU'VE WON :)";
        } else {
          results.textContent = "IT'S A TIE";
        }
        container.appendChild(results);
      }
    });
  });
}

game();