"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const checkHighScore = (highScore) => {
  document.querySelector(".highscore").textContent = highScore;
};
const winScreen = () => {
  displayMessage("Correct Number!🎉🥳");
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector(".number").style.width = "30rem";
  document.querySelector(".number").textContent = secretNumber;
};

const losingScreen = () => {
  displayMessage("You lose ...");
  document.querySelector(".score").textContent = 0;
  document.querySelector("body").style.backgroundColor = "#ea5447";
  document.querySelector(".number").textContent = secretNumber;
};

const checkScore = (score) => {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    /* document.querySelector(".message").textContent =
      "Please insert integer numbers⛔"; */
    displayMessage("Please insert integer numbers⛔");
    // When player wins
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "Correct Number!";
    // put the above in the displayMessage()
    winScreen();
    if (score > highScore) {
      highScore = score;
      checkHighScore(highScore);
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      //  guess > secretNumber ? "Too high 📈 !" : "Too low 📉 !";
      displayMessage(guess > secretNumber ? "Too high 📈 !" : "Too low 📉 !");
      score--;
      checkScore(score);
    } else {
      losingScreen();
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  checkScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
