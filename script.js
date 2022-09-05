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

// Compare inputs and declare the winner
function playRound() {
  const playerChoice = prompt(
    "What do you want to show - rock, paper, or scissors?"
  ).toLowerCase();
  const computerChoice = getComputerChoice();

  function compareChoices() {
    if (playerChoice === computerChoice) {
      return "It's a DRAW. Go again.";
    } else if (
      (playerChoice === "rock" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "rock")
    ) {
      return `You lose! The computer has shown ${computerChoice} and beat your ${playerChoice}`;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return `You win! The computer has shown ${computerChoice} and lost to your ${playerChoice}`;
    } else {
      return `You entered ${playerChoice} which is not a valid option`;
    }
  }
}

console.log(playRound());
