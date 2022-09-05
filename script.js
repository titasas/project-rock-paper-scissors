let playerPoints = 0;
let computerPoints = 0;
let roundsPlayed = 0;

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

// Get inputs, compare and declare the winner
function playRound() {
  const playerChoice = prompt(
    "What do you want to show - rock, paper, or scissors?"
  ).toLowerCase();
  const computerChoice = getComputerChoice();

  function compareChoices(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a DRAW. Go again.";
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      roundsPlayed++;
      computerPoints++;
      return `You lose! The computer has shown ${computerSelection} and beat your ${playerSelection}`;
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      roundsPlayed++;
      playerPoints++;
      return `You win! The computer has shown ${computerSelection} and lost to your ${playerSelection}`;
    } else {
      return `You entered ${playerSelection} which is not a valid option`;
    }
  }
  return compareChoices(playerChoice, computerChoice);
}

// Play 5 rounds and declare a winner of the whole game
function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}. ${playRound()}`);
    console.log(
      `You have ${playerPoints} points, and the computer has ${computerPoints} points.`
    );
  }
  if (playerPoints > computerPoints) {
    console.log("CONGRATULATIONS! You have WON against the computer.");
  } else if (playerPoints < computerPoints) {
    console.log("GAME OVER! You have LOST against the computer.");
  } else console.log("It's a TIE! Do you want to try again?");
  // compare who has more points and log the winner
}

console.log(game());
