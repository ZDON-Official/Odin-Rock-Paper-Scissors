const resultDisplay = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;
let result = "";

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const Pscore = document.getElementById("playerScore");
const Cscore = document.getElementById("computerScore");

function getComputerChoice() {
  var rand = Math.floor(Math.random() * 3);

  if (rand === 0) {
    return "rock";
  } else if (rand === 1) {
    return "paper";
  }

  return "scissors";
}

function PlayRound(getComputerChoice, playerSelection) {
  Ps = playerSelection.toLowerCase();
  Cp = getComputerChoice;

  if (Ps === Cp) {
    return "It's a draw!";
  }

  if (Cp === "paper" && Ps === "rock") {
    return "You Lose! Paper beats Rock";
  } else if (Cp === "rock" && Ps === "scissor") {
    return "You Lose! Rock beats Scissor";
  } else if (Cp === "scissor" && Ps === "paper") {
    return "You Lose! Scissors beats Paper";
  }

  return "You Win! " + Ps + " beats " + Cp;
}

function Game() {
  while (playerScore < 5 || computerScore < 5) {
    if (result.includes("Win")) {
      playerScore++;
    } else {
      computerScore++;
    }

    // update scores
    Pscore.innerHTML = playerScore;
    Cscore.innerHTML = computerScore;
  }

  if (Pscore > Cscore) {
    return "You Win!!";
  } else if (Pscore < Cscore) {
    return "You Lost!";
  }

  return "It's a Draw";
}

function isOver() {
  return playerScore === 5 || computerScore === 5;
}

function showResult() {
  if (playerScore > computerScore) {
    resultDisplay.innerHTML = "You Win!!";
  } else if (Pscore < Cscore) {
    resultDisplay.innerHTML = "You Lost!";
  }

  resultDisplay.innerHTML = "It's a Draw";
}

// updates the scoreboard
function updateScores() {
  Pscore.innerHTML = playerScore;
  Cscore.innerHTML = computerScore;
}

// one of the buttons is clicked
function buttonClicked(playerSelection) {
  // check if the game is over (one player won 5 times)
  if (isOver) {
    resultDisplay.innerHTML = "Game Over";
    return;
  }

  result = PlayRound(getComputerChoice, playerSelection);

  if (result.includes("Win")) {
    playerScore++;
  } else {
    computerScore++;
  }
}

rockButton.addEventListener("click", function () {
  console.log("rock clicked");
  buttonClicked("rock");
});
paperButton.addEventListener("click", function () {
  buttonClicked("paper");
});
paperButton.addEventListener("click", function () {
  buttonClicked("scissors");
});
