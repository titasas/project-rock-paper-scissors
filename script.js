// Figure out what the computer shows
function getComputerChoice() {
  let computerChoice = " ";
  const randomNumb = Math.floor(Math.random() * 3);
  switch (randomNumb) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

// Decide what the user shows
let playerChoice = prompt(
  "What do you want to show - rock, paper, or scissors?"
).toLowerCase();

// Compare inputs and declare the winner
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a DRAW. Go again.";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return `You lose! The computer has shown ${computerSelection} and beat your ${playerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! The computer has shown ${computerSelection} and lost to your ${playerSelection}`;
  } else {
    return `You entered ${playerSelection} which is not a valid option`;
  }
}
