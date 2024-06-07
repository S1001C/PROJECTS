let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let parauserScore = document.querySelector("#user-score");
let parcompScore = document.querySelector("#comp-score");

const gencomputerchoice = () => {
  const options = ["rock", "papper", "scissors"];
  const random = Math.floor(Math.random() * 3);
  return options[random];
};
const drawgame = () => {
  console.log("game draw");
  msg.innerText = "DRAW!";
  msg.style.backgroundColor = "#081b31";
};

const showwinner = (userwin) => {
  if (userwin) {
    console.log("you win");
    userScore++;
    parauserScore.innerText = userScore;
    msg.innerText = "You win!";
    msg.style.backgroundColor = "green";
  } else {
    console.log("you lose");
    compScore++;
    parcompScore.innerText = compScore;
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "red";
  }
};
const playgame = (userchoice) => {
  console.log("userchoice =", userchoice);
  const compchoice = gencomputerchoice();
  console.log("computerchoice =", compchoice);

  if (userchoice === compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "papper" ? false : true;
    } else if (userchoice === "papper") {
      userwin = compchoice === "scissors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
