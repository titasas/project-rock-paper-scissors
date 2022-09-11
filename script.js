let playerPoints = 0;
let computerPoints = 0;
let roundsPlayed = 0;

const ROCK = document.querySelector("#rock__icon");
const PAPER = document.querySelector("#paper__icon");
const SCISSORS = document.querySelector("#scissors__icon");

const INFO = document.querySelector("#game__information");
INFO.style.fontSize = "32px";
INFO.style.zIndex = "1";

const playAgainBtn = document.createElement("button");

let playerCount = document.querySelector("#playerCount");
let computerCount = document.querySelector("#computerCount");
playerCount.style.textDecoration = "underline";
playerCount.style.textDecorationColor = "rgb(192,192,192, 0.5)";
computerCount.style.textDecoration = "underline";
computerCount.style.textDecorationColor = "rgb(192,192,192, 0.5)";

let playerChoice = " ";

// Get player's choice
ROCK.addEventListener("click", () => {
  playerChoice = "rock";
  playRound(playerChoice, getComputerChoice());
});
PAPER.addEventListener("click", () => {
  playerChoice = "paper";
  playRound(playerChoice, getComputerChoice());
});
SCISSORS.addEventListener("click", () => {
  playerChoice = "scissors";
  playRound(playerChoice, getComputerChoice());
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
      roundsPlayed++;
      INFO.innerHTML = "It's a <strong>TIE</strong>. Go again.";
    } else if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      roundsPlayed++;
      computerPoints++;
      computerCount.innerText = `Computer points: ${computerPoints}`;
      INFO.innerHTML = `<span style="font-weight:bold;color:#E30B5C;">You lose!</span> The computer has shown <strong>${computerSelection}</strong> and beat your <strong>${playerSelection}</strong>`;
    } else {
      roundsPlayed++;
      playerPoints++;
      playerCount.innerText = `Player points: ${playerPoints}`;
      INFO.innerHTML = `<span style="font-weight:bold;color:#508739;">You win!</span> The computer has shown <strong>${computerSelection}</strong> and lost to your <strong>${playerSelection}</strong>`;
    }
    if (roundsPlayed === 5) {
      if (computerPoints === playerPoints) {
        INFO.innerHTML = `It's a <strong>DRAW!</strong> You both fought well`;
      } else if (computerPoints > playerPoints) {
        INFO.innerHTML = `GAME OVER! The computer won and is laughing at your efforts`;
      } else
        INFO.innerHTML = `VICTORY! You destroyed the computer's last hopes`;
    }
  }
  return compareChoices(playerChoice, computerChoice);
}

//REBOOT THE GAME
function reboot() {
  INFO.innerHTML = null;
}
