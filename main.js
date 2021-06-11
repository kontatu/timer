const inputTime = document.getElementById("inputTime");
const nowTime = document.getElementById("nowTime");
const setTime = document.getElementById("setTime");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");

let sec;
let timer;
let hours;
let minutes;
let seconds;


setTime.addEventListener('click', function () {
    sec = inputTime.value;
    nowTime.textContent = secTimer() + `  セット完了です`
});

startTimer.addEventListener('click', function () {
    clearInterval(timer);
    timer = setInterval('countDown()', 1000);
});

const countDown = function () {
    sec -= 1;
    nowTime.textContent = secTimer();
    if (sec === 0) {
        clearInterval(timer);
        alert('終了');
    };
};

stopTimer.addEventListener('click', function () {
    clearInterval(timer);
    nowTime.textContent = secTimer() + `  ストップ`;
});

const secTimer = function () {
    hours = Math.floor(sec / 3600);
    minutes = Math.floor((sec % 3600) / 60);
    seconds = sec % 60;
    return `${hours}:${minutes}:${seconds}`
}
