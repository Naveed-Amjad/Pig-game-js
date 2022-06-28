// selecting elements
const rollDice = document.querySelector("#rollDice");
const rollingScore = document.getElementById("rollingScore");
const currentScore1 = document.getElementById("currentScore1");
const currentScore2 = document.getElementById("currentScore2");
const totalScore1 = document.getElementById("totalScore1");
const totalScore2 = document.getElementById("totalScore2");
const newGame = document.getElementById("newGame");
const hold = document.getElementById("hold");

// initializing elements
currentScore1.textContent = 0;
currentScore2.textContent = 0;
totalScore1.textContent = 0;
totalScore2.textContent = 0;

// current score
let currentScore = 0;
// evnet handler to roll dice
rollDice.addEventListener("click", function () {
  const diceScore = Math.trunc(Math.random() * 6 + 1);
  currentScore += diceScore;
  rollingScore.textContent = diceScore;
  currentScore1.textContent = currentScore;
});
// event handler to hold current score (add current score to total score)
hold.addEventListener("click", function () {
  totalScore1.textContent = currentScore;
  console.log(totalScore1);
});
