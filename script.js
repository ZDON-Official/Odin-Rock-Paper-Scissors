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
    const ComputerSelection = getComputerChoice();

    rockButton.addEventListener("click", function () {
      console.log("rock clicked");
      result = PlayRound(ComputerSelection, "rock");
    });
    paperButton.addEventListener("click", function () {
      result = PlayRound(ComputerSelection, "paper");
    });
    paperButton.addEventListener("click", function () {
      result = PlayRound(ComputerSelection, "scissor");
    });

    if (result.includes("Win")) {
      playerScore++;
    } else {
      computerScore++;
    }

    // update scores
    Pscore.innerHTML = playerScore;
    Cscore.innerHTML = computerScore;

    // console.log(result);
  }

  if (Pscore > Cscore) {
    return "You Win!!";
  } else if (Pscore < Cscore) {
    return "You Lost!";
  }

  return "It's a Draw";
}

var res = Game();
console.log(res);
