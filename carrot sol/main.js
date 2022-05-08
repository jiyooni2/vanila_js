const field = document.querySelector("div.field");
const play = document.querySelector("button.play");
const timer = document.querySelector(".timer");
const bgAudio = document.querySelector("audio");
const popUp = document.querySelector(".popup");
const redo = document.querySelector(".popup-button");

//Timer, CSS 수정
//Event로 넘겨줄수도 있겠지요...
//Success나 이런걸 다 Event로 넘기면 좀 더 코드가 깔끔해질듯
//Success, Failed에 removeEventListener 등록하기

let interval;
let startTimeMS;
let timerId;
let timerStep = 10000;
let running;
let carrotNum;
let startCarrot = 5;
let isPlaying;

class Timer {
  constructor(callback, delay) {
    this.callback = callback;
  }

  start() {
    running = true;
    started = new Date();
    id = setTimeout(callback, remaining);
  }

  pause() {
    running = false;
    clearTimeout(id);
    remaining -= new Date() - started;
  }

  getTimeLeft() {
    if (running) {
      this.pause();
      this.start();
    }
    return remaining;
  }

  getStateRunning() {
    return running;
  }
}

function getRemainingTime() {
  return timerStep - (new Date().getTime() - startTimeMs);
}

function playGame(event) {
  if (event.target.className === "carrot") {
    carrotNum--;

    const correctAudio = document.createElement("audio");
    correctAudio.src = "./sound/carrot_pull.mp3";
    correctAudio.play();

    event.target.remove();

    if (carrotNum === 0) {
      const winAudio = document.createElement("audio");
      bgAudio.pause();
      winAudio.src = "./sound/game_win.mp3";
      winAudio.play();
      clearTimeout(timerId);
      clearInterval(interval);

      popUp.querySelector("p").textContent = "Success";
      popUp.style.display = "block";
    }
  }
  if (event.target.className === "bug") {
    const wrongAudio = document.createElement("audio");
    wrongAudio.src = "./sound/bug_pull.mp3";
    wrongAudio.play();

    window.dispatchEvent(new Event("gameOver"));
  }
}

function gameSet() {
  field.innerHTML = "";
  carrotNum = startCarrot;

  for (let i = 0; i < startCarrot; i++) {
    const carrot = document.createElement("img");
    carrot.setAttribute("class", "carrot");
    carrot.setAttribute("src", "./img/carrot.png");
    carrot.setAttribute("alt", "carrot");
    carrot.style.transform = `translate(${Math.random() * 720}px,${
      Math.random() * 150
    }px)`;
    field.append(carrot);
  }
  for (let i = 0; i < 10; i++) {
    const bug = document.createElement("img");
    bug.setAttribute("class", "bug");
    bug.setAttribute("src", "./img/bug.png");
    bug.setAttribute("alt", "bug");
    bug.style.transform = `translate(${Math.random() * 720}px,${
      Math.random() * 150
    }px)`;
    field.append(bug);
  }
}

function startTimer() {
  startTimeMs = new Date().getTime();
  running = true;
  timerId = setTimeout(() => {
    timer.innerText = 0.0;
    running = false;
    window.dispatchEvent(new Event("gameOver"));
  }, timerStep);
}

play.addEventListener("click", () => {
  isPlaying = true;
  play.innerHTML = `<i class="fas fa-stop"></i>`;
  startTimer();
  interval = setInterval(() => {
    timer.innerText = getRemainingTime();
  }, 100);
});

window.addEventListener("gameOver", () => {
  clearTimeout(timerId);
  clearInterval(interval);
  bgAudio.pause();
  const alertAudio = document.createElement("audio");
  alertAudio.src = "./sound/alert.wav";
  alertAudio.play();

  popUp.querySelector("p").textContent = "Failed";
  popUp.style.display = "block";
});

redo.addEventListener("click", () => {
  popUp.style.display = "none";
  bgAudio.play();
  gameSet();
  play.dispatchEvent(new Event("click"));
});

field.addEventListener("click", playGame);

gameSet();
