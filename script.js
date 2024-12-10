let timeRemaining = 420;
let timerDisplay = document.getElementById("seconds");

function beginTimer() {
  let timerInterval = setInterval(function () {
    timerDisplay.innerHTML = timeRemaining + "s";

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      timerDisplay.innerHTML = "Game Over";
      console.log("Timer has Reached 0");
    } else {
      timeRemaining--;
    }
  }, 1000);
}
beginTimer();

function TimerExpired() {
  console.log("spooky");
}

// Modal 1
function showScreen() {
  document.getElementById("modal").style.display = "flex";
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
function checkAnswer1() {
  if (document.getElementById("answer-river").value == "river") {
    console.log("Correct!");
    // The correct answer remains unchanged on the textbox, wrong answer erases.
  }
}

// Modal 2
function showScreen2() {
  document.getElementById("modal2").style.display = "flex";
}
function closeModal2() {
  document.getElementById("modal2").style.display = "none";
}

// Modal 3
function showScreen3() {
  document.getElementById("modal3").style.display = "flex";
}
function closeModal3() {
  document.getElementById("modal3").style.display = "none";
}

var timeLeft = 900;

window.onload = function () {
  var demoElement = document.getElementById("demo");
};
