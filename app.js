const container = document.querySelector(".container");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const watchDiv = document.querySelector(".watchDiv");
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let watch;
reset.style.display = "none";
start.addEventListener("click", (e) => {
  if (e.target.classList.contains("start")) {
    e.target.classList.remove("start");
    // e.target.classList.add('pause')
    e.target.innerText = "Pause";
    watch = setInterval(watchStart, 10);
  } else {
    // e.target.classList.remove("pause");
    e.target.classList.add("start");
    e.target.innerText = "Start";
    clearInterval(watch);
    reset.style.display = "inline";
  }
});

reset.addEventListener("click", () => {
  clearInterval(watch);
  watchDiv.innerHTML = "00:00:00";
  start.classList.remove("pause");
  start.classList.add("start");
  start.innerText = "Start";
  reset.style.display = "none";

  milliseconds = 0;
  seconds = 0;
  minutes = 0;
});

function watchStart() {
  milliseconds += 1;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }

  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  watchDiv.innerHTML = ` ${m} : ${s} : ${ms}`;
}
