"use strict";

let score = 20;
document.querySelector(".score").textContent = score;
document.querySelector(".number").textContent;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  // console.log(guess);

  console.log(secretNumber);

  // WHEN GUESING NO NUMBER
  if (!guess) {
    document.querySelector(".message").textContent =
      "⛔Yon have enter any number";

  // WHEN GUESSING RIGTH NUMBER
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 Correct Number";
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector(".rapper").style.backgroundColor = "#f224";
    document.querySelector(".hurray").textContent = "🙌 HURRAY YOU WON";

  // WHEN GUESS IS TOO HIGH
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Number too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You loose";
      document.querySelector(".hurray").textContent = "😪GAME-OVER😪";
    }

  //  WHEN GUESS IS TOO LOW
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Number too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You loose";
    }
  }
});

//WHEN TO RESTART THE GAME
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "start guessing";
  document.querySelector(".hurray").textContent = "GUESS MY NUMBER";
  document.querySelector(".rapper").style.backgroundColor = "#fff";
  document.querySelector(".number").textContent = "?";
  Number(document.querySelector(".guess").value = '');
  document.querySelector('.score').textContent = score
});
