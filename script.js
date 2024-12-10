const images = [
  "Images/Cutscene.png",
  "Images/Cutscene0.png",
  "Images/Cutscene1.png",
  "Images/Cutscene1Scene2.png",
  "Images/Cutscene1Scene3.png",
  "Images/TitleScreen1.png",
  "Images/TitleScreen2.png",
];

let currentIndex = 0;

function changeBackgroundImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.body.style.backgroundImage = `url(${images[currentIndex]})`;

  if (images[currentIndex] === "Images/TitleScreen2.png") {
    roomChange();
  }
}

function roomChange() {
  window.location.href = "https://rjm7qp.csb.app/"; // Redirect to URL
}

document.body.addEventListener("click", changeBackgroundImage);

// music WIP
const backgroundMusic = new Audio("audio/.mp3");
backgroundMusic.loop = true;

const playbackState = getCookie("musicPlaybackState");
if (playbackState === "playing") {
  const currentTime = parseFloat(getCookie("musicCurrentTime"));
  backgroundMusic.currentTime = currentTime;
  backgroundMusic.play();
} else {
  backgroundMusic.play();
}
