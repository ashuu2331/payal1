const startBtn = document.getElementById("startBtn");
const hiddenContent = document.getElementById("hiddenContent");

startBtn.addEventListener("click", () => {
    hiddenContent.classList.remove("hidden");
    startBtn.style.display = "none";
});

const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

secretBtn.addEventListener("click", () => {
    secretMessage.classList.remove("hidden");
});

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {
    bgMusic.play();
});