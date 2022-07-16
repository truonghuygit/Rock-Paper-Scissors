let dataBase = { playerScore: 0 };

// random
const getComputerChoice = () => {
  const arr = ["búa", "bao", "kéo"];
  let result = Math.floor(Math.random() * arr.length);
  return arr[result];
};

//So sanh ket qua
const compareResult = (humanChoice, computerChoice) => {
  let score;
  if (humanChoice === computerChoice) {
    score = 0;
  } else if (humanChoice === "búa" && computerChoice === "kéo") {
    score = 1;
  } else if (humanChoice === "bao" && computerChoice === "búa") {
    score = 1;
  } else if (humanChoice === "kéo" && computerChoice === "bao") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
};

//showResult
const showResult = (score, humanChoice, computerChoice) => {
  let result = document.querySelector(".result");
  let yourScore = document.querySelector(".yourScore");
  let random = document.querySelector(".random");

  switch (score) {
    case 0:
      result.innerHTML = "Mày đã hòa :))";
      break;

    case 1:
      result.innerHTML = "Mày thắng rồi thằng ngu";

      break;

    case -1:
      result.innerHTML = "Mày đã thua rồi thằng ngu, haha";

      break;
  }
  yourScore.innerHTML = `Điểm của mày: ${dataBase.playerScore}`;
  random.innerHTML = `(Mày)👱: ${humanChoice} VS 🤖: ${computerChoice}(bot)`;
};

const clickButton = (humanChoice) => {
  let computerChoice = getComputerChoice();
  let score = compareResult(humanChoice, computerChoice);
  dataBase.playerScore += score;
  showResult(score, humanChoice, computerChoice);
};

//play
const playGame = () => {
  let rpsButton = document.querySelectorAll(".btn");
  let reset = document.querySelector(".reset");

  for (let i = 0; i < rpsButton.length; i++) {
    rpsButton[i].onclick = () => {
      clickButton(rpsButton[i].value);
    };
  }

  reset.onclick = () => {
    end();
  };
};

//end
const end = () => {
  let result = document.querySelector(".result");
  let yourScore = document.querySelector(".yourScore");
  let random = document.querySelector(".random");

  dataBase.playerScore = 0;
  result.innerHTML = "";
  yourScore.innerHTML = "";
  random.innerHTML = "";
};
playGame();
