let playerPoints = 0;
let computerPoints = 0;
let roundsPlayed = 0;
let updated = false;

const ROCK = document.querySelector("#rock__icon");
const PAPER = document.querySelector("#paper__icon");
const SCISSORS = document.querySelector("#scissors__icon");

let playerChoice = " ";

// Get player's choice
ROCK.addEventListener("click", () => {
  updated = true;
  if (roundsPlayed === 0) {
    playerChoice = "rock";
    game(playerChoice, getComputerChoice());
  } else return (playerChoice = "rock");
});
PAPER.addEventListener("click", () => {
  updated = true;
  if (roundsPlayed === 0) {
    playerChoice = "paper";
    game(playerChoice, getComputerChoice());
  } else return (playerChoice = "paper");
});
SCISSORS.addEventListener("click", () => {
  updated = true;
  if (roundsPlayed === 0) {
    playerChoice = "scissors";
    game(playerChoice, getComputerChoice());
  } else return (playerChoice = "scissors");
});

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

// Compare and declare the winner
function playRound(playerSelection, computerSelection) {
  const computerChoice = getComputerChoice();

  function compareChoices(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a TIE. Go again.";
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
function game(playerSelection, computerSelection) {
  for (let i = 0; i < 5; i++) {
    updated = false;
    console.log(playerSelection);
    roundsPlayed = i;
    // HOW TO MAKE IT WAIT FOR THE NEXT ADD EVENT LISTENER HERE? GOOGLING NOW...
    playRound(playerSelection, computerSelection);
    while (!updated) {}
  }
  roundsPlayed = 0;
  // for (let i = 1; i <= 5; i++) {
  //   console.log(`Round ${i}. ${playRound(playerChoice, getComputerChoice())}`);
  //   console.log(
  //     `You have ${playerPoints} points, and the computer has ${computerPoints} points.`
  //   );
  // }
  // if (playerPoints > computerPoints) {
  //   console.log("CONGRATULATIONS! You have WON against the computer.");
  // } else if (playerPoints < computerPoints) {
  //   console.log("GAME OVER! You have LOST against the computer.");
  // } else console.log("It's a TIE! Do you want to try again?");
}
