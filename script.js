const resultDisplay = document.getElementById("result");

let playerScore = 0;
let computerScore = 0;
let result = "";

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

const restartButton = document.getElementById("restart_btn");

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

  resultDisplay.innerHTML = "";
  var status;

  if (Ps === Cp) {
    console.log("in draw");
    resultDisplay.innerHTML = "It's a Draw";
    return;
  }

  if (Cp === "paper" && Ps === "rock") {
    console.log("paper beats rock");
    resultDisplay.innerHTML = `You lose! Paper beats rock`;
    status = false;
  } else if (Cp === "rock" && Ps === "scissor") {
    console.log("rock beats scissor");

    resultDisplay.innerHTML = `You lose! Rock beats scissor`;

    status = false;
  } else if (Cp === "scissor" && Ps === "paper") {
    console.log("scissor cuts paper");

    resultDisplay.innerHTML = `You lose! scissor cuts paper`;

    status = false;
  } else {
    resultDisplay.innerHTML = `You win! ${Ps} beats ${Cp}`;
    status = true;
  }

  console.log(`status ${status}`);

  updateScores(status);
}

function updateScores(boolean) {
  // console.log(`updating scores ${boolean}`);
  if (boolean) {
    playerScore++;
  } else {
    computerScore++;
  }
}

function isOver() {
  // console.log(`inside isOver ${playerScore === 5 || computerScore === 5}`);
  return playerScore === 5 || computerScore === 5;
}

function showResult() {
  if (playerScore > computerScore) {
    resultDisplay.innerHTML = "You Win!!";
  } else if (playerScore < computerScore) {
    resultDisplay.innerHTML = "You Lost!";
  } else {
    resultDisplay.innerHTML = "It's a Draw";
  }
}

// updates the scoreboard
function updateScoreboard() {
  Pscore.innerHTML = playerScore;
  Cscore.innerHTML = computerScore;
}

// one of the buttons is clicked
function buttonClicked(playerSelection) {
  // check if the game is over (one player won 5 times)
  const computerChoice = getComputerChoice();
  if (isOver()) {
    showResult();
    return;
  }

  PlayRound(computerChoice, playerSelection);
  updateScoreboard();
}

// TODO: restart the game when the user clicks the restart button
function restart() {
  playerScore = 0;
  computerScore = 0;
  resultDisplay.innerHTML = "";
  updateScoreboard();
}

rockButton.addEventListener("click", function () {
  // console.log("rock clicked");
  buttonClicked("rock");
});
paperButton.addEventListener("click", function () {
  buttonClicked("paper");
});
scissorsButton.addEventListener("click", function () {
  buttonClicked("scissor");
});
restartButton.addEventListener("click", function () {
  restart();
});

// TODO: add a restart button event listener
