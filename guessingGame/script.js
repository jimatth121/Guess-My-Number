"use strict";


document.querySelector('.note-btn').addEventListener('click',function(){
  document.querySelector('.overlay').style.display = 'none'
})
let highScore = (document.querySelector(".high-score").textContent = 0);
let score = 20;
let displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".score").textContent = score;
document.querySelector(".number").textContent;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  // console.log(guess);

  console.log(secretNumber);

  // WHEN GUESING NO NUMBER
  if (!guess) {
    displaymessage("⛔You have not enter any number");

    // WHEN GUESSING RIGTH NUMBER
  } else if (guess === secretNumber) {
    document.querySelector(".display").style.display = 'none';
    document.querySelector(".number").style.display = 'block'
    document.querySelector(".number").textContent = secretNumber;
    displaymessage("🎉 Correct Number");
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector(".rapper").style.backgroundColor = "#f224";
    document.querySelector(".hurray").textContent = "🙌 HURRAY YOU WON";
    document.querySelector(".number").style.backgroundColor = "#fff";
    document.querySelector(".number").style.width = "80px";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }
  }

  //  WHEN THE GUESS IS EQUAL TO SECRET NUMBER
  else if (guess !== secretNumber) {
    if (score > 1) {
      displaymessage(
        guess > secretNumber ? "📈Number too High" : "📉Number too Low"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displaymessage("You loose");
      document.querySelector(".hurray").textContent = "😪GAME-OVER😪";
      document.querySelector(".rapper").style.backgroundColor = "#893";
    }
  }

  // WHEN GUESS IS TOO HIGH
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Number too High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You loose";
  //     document.querySelector(".hurray").textContent = "😪GAME-OVER😪";
  //   }

  // //  WHEN GUESS IS TOO LOW
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector(".message").textContent = "Number too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You loose";
  //   }
  // }
});


////////// USING ENTER KEY/////////////////
document.addEventListener('keydown',function(e){
  if (e.key === 'Enter'){
    let guess = Number(document.querySelector(".guess").value);
  // console.log(guess);

  console.log(secretNumber);

  // WHEN GUESING NO NUMBER
  if (!guess) {
    displaymessage("⛔You have not enter any number");

    // WHEN GUESSING RIGTH NUMBER
  } else if (guess === secretNumber) {
    document.querySelector(".display").style.display = 'none';
    document.querySelector(".number").style.display = 'block'
    document.querySelector(".number").textContent = secretNumber;
    displaymessage("🎉 Correct Number");
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector(".rapper").style.backgroundColor = "#f224";
    document.querySelector(".hurray").textContent = "🙌 HURRAY YOU WON";
    document.querySelector(".number").style.backgroundColor = "#fff";
    document.querySelector(".number").style.width = "80px";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }
  }

  /////////  WHEN THE GUESS IS EQUAL TO SECRET NUMBER////////
  else if (guess !== secretNumber) {
    if (score > 1) {
      displaymessage(
        guess > secretNumber ? "📈Number too High" : "📉Number too Low"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displaymessage("You loose");
      document.querySelector(".hurray").textContent = "😪GAME-OVER😪";
      document.querySelector(".rapper").style.backgroundColor = "#893";
    }
  }}
})

/////////////// TO CONTINUE THE GAME///////////////
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displaymessage("start guessing");
  document.querySelector(".hurray").textContent = "GUESS MY NUMBER";
  document.querySelector(".rapper").style.backgroundColor = "#fff";
  document.querySelector(".number").style.display = 'none';
  Number((document.querySelector(".guess").value = ""));
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.backgroundColor = "#fff";
  document.querySelector(".display").style.display = 'block';
});
